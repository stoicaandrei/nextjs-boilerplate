"use client";

import { useState } from "react";
import { useAction } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

export function EmailSender() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const sendEmail = useAction(api.emailActions.sendWelcomeEmailAction);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsLoading(true);
    setStatus("idle");
    setMessage("");

    try {
      await sendEmail({ name: name.trim(), to: email.trim() });
      setStatus("success");
      setMessage(`Email sent successfully to ${email}!`);
      setName("");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage("Failed to send email. Please try again.");
      console.error("Email sending error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="rounded-lg border bg-background p-2 text-purple-500">
            <Mail className="size-5" />
          </div>
          <div>
            <CardTitle className="text-xl">Send Test Email</CardTitle>
            <CardDescription>
              Test your email service with a personalized welcome message
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading || !name.trim() || !email.trim()}
          >
            {isLoading ? (
              <>
                <div className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Sending...
              </>
            ) : (
              <>
                <Send className="size-4" />
                Send Test Email
              </>
            )}
          </Button>

          {status !== "idle" && (
            <div
              className={`flex items-center gap-2 rounded-md p-3 text-sm ${
                status === "success"
                  ? "bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-400"
              }`}
            >
              {status === "success" ? (
                <CheckCircle className="size-4" />
              ) : (
                <AlertCircle className="size-4" />
              )}
              <span>{message}</span>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
