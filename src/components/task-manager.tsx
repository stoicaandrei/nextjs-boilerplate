"use client";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ExternalLink, Plus, Trash2, Edit2, Check, X } from "lucide-react";

interface Task {
  _id: Id<"tasks">;
  _creationTime: number;
  title: string;
  description?: string;
  completed: boolean;
}

export function TaskManager() {
  const tasks = useQuery(api.tasks.get) ?? [];
  const createTask = useMutation(api.tasks.create);
  const updateTask = useMutation(api.tasks.update);
  const deleteTask = useMutation(api.tasks.remove);

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [editingTask, setEditingTask] = useState<Id<"tasks"> | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    try {
      await createTask({
        title: newTaskTitle.trim(),
        description: newTaskDescription.trim() || undefined,
      });
      setNewTaskTitle("");
      setNewTaskDescription("");
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  const handleToggleComplete = async (taskId: Id<"tasks">, completed: boolean) => {
    try {
      await updateTask({ id: taskId, completed });
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  const handleStartEdit = (task: Task) => {
    setEditingTask(task._id);
    setEditTitle(task.title);
    setEditDescription(task.description || "");
  };

  const handleSaveEdit = async () => {
    if (!editingTask || !editTitle.trim()) return;

    try {
      await updateTask({
        id: editingTask,
        title: editTitle.trim(),
        description: editDescription.trim() || undefined,
      });
      setEditingTask(null);
      setEditTitle("");
      setEditDescription("");
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
    setEditTitle("");
    setEditDescription("");
  };

  const handleDeleteTask = async (taskId: Id<"tasks">) => {
    try {
      await deleteTask({ id: taskId });
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  const completedTasks = tasks.filter(task => task.completed);
  const pendingTasks = tasks.filter(task => !task.completed);

  return (
    <div className="space-y-6">
      {/* Header with Convex Dashboard Link */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Task Manager</h2>
          <p className="text-muted-foreground">Manage your tasks with Convex</p>
        </div>
        <Button
          variant="outline"
          asChild
          className="flex items-center gap-2"
        >
          <a
            href="https://dashboard.convex.dev/d/famous-viper-816"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="h-4 w-4" />
            Convex Dashboard
          </a>
        </Button>
      </div>

      {/* Add New Task Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Add New Task
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreateTask} className="space-y-4">
            <div>
              <Input
                placeholder="Task title..."
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Task description (optional)..."
                value={newTaskDescription}
                onChange={(e) => setNewTaskDescription(e.target.value)}
                rows={2}
              />
            </div>
            <Button type="submit" className="w-full">
              Add Task
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Pending Tasks */}
      {pendingTasks.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Pending Tasks ({pendingTasks.length})</h3>
          <div className="space-y-3">
            {pendingTasks.map((task) => (
              <Card key={task._id} className="p-4">
                <div className="flex items-start gap-3">
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={(checked) =>
                      handleToggleComplete(task._id, checked as boolean)
                    }
                    className="mt-1"
                  />
                  <div className="flex-1">
                    {editingTask === task._id ? (
                      <div className="space-y-2">
                        <Input
                          value={editTitle}
                          onChange={(e) => setEditTitle(e.target.value)}
                          className="font-medium"
                        />
                        <Textarea
                          value={editDescription}
                          onChange={(e) => setEditDescription(e.target.value)}
                          rows={2}
                        />
                        <div className="flex gap-2">
                          <Button size="sm" onClick={handleSaveEdit}>
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" onClick={handleCancelEdit}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <h4 className="font-medium">{task.title}</h4>
                        {task.description && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {task.description}
                          </p>
                        )}
                        <div className="flex gap-2 mt-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleStartEdit(task)}
                          >
                            <Edit2 className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDeleteTask(task._id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Completed Tasks */}
      {completedTasks.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Completed Tasks ({completedTasks.length})</h3>
          <div className="space-y-3">
            {completedTasks.map((task) => (
              <Card key={task._id} className="p-4 opacity-75">
                <div className="flex items-start gap-3">
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={(checked) =>
                      handleToggleComplete(task._id, checked as boolean)
                    }
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium line-through">{task.title}</h4>
                    {task.description && (
                      <p className="text-sm text-muted-foreground mt-1 line-through">
                        {task.description}
                      </p>
                    )}
                    <div className="flex gap-2 mt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleStartEdit(task)}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDeleteTask(task._id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {tasks.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-muted-foreground">No tasks yet. Create your first task above!</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

