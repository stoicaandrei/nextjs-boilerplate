import {
  BarChart3,
  Database,
  Mail,
  Settings,
  Shield,
  Zap,
} from "lucide-react";

import { Background } from "@/components/background";
import { DashedLine } from "@/components/dashed-line";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TaskManager } from "@/components/task-manager";

const services = [
  {
    title: "Analytics",
    description: "Track user behavior and application metrics in real-time.",
    icon: BarChart3,
    status: "active",
    color: "text-blue-500",
  },
  {
    title: "Database",
    description: "Manage your data with powerful query tools and backups.",
    icon: Database,
    status: "active",
    color: "text-green-500",
  },
  {
    title: "Email Service",
    description: "Send transactional emails and manage campaigns.",
    icon: Mail,
    status: "setup",
    color: "text-purple-500",
  },
  {
    title: "Authentication",
    description: "Secure user authentication with multiple providers.",
    icon: Shield,
    status: "active",
    color: "text-red-500",
  },
  {
    title: "API Gateway",
    description: "Manage and monitor your API endpoints efficiently.",
    icon: Zap,
    status: "setup",
    color: "text-yellow-500",
  },
  {
    title: "Settings",
    description: "Configure your application and manage preferences.",
    icon: Settings,
    status: "active",
    color: "text-gray-500",
  },
];

export default function Dashboard() {
  return (
    <Background className="via-muted to-muted/80">
      <section className="py-28 lg:py-32 lg:pt-44">
        <div className="container">
          {/* Hero Section */}
          <div className="mb-12 md:mb-20">
            <h1 className="text-foreground max-w-3xl text-3xl tracking-tight md:text-4xl lg:text-5xl">
              Welcome to your Dashboard
            </h1>
            <p className="text-muted-foreground mt-5 max-w-2xl text-lg md:text-xl">
              Manage your services, monitor performance, and configure your
              application from one central hub.
            </p>
          </div>

          {/* Dashed line separator */}
          <div className="relative mb-12 flex items-center justify-center md:mb-16">
            <DashedLine className="text-muted-foreground" />
            <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
              YOUR SERVICES
            </span>
          </div>

          {/* Services Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="group transition-all hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="mb-4 flex items-start justify-between">
                      <div
                        className={`rounded-lg border bg-background p-3 ${service.color}`}
                      >
                        <Icon className="size-6" />
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                          service.status === "active"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                        }`}
                      >
                        {service.status === "active" ? "Active" : "Setup"}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="mt-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      className="w-full transition-all group-hover:bg-accent"
                    >
                      Configure
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Task Manager Section */}
          <div className="relative mt-16 md:mt-24">
            <DashedLine
              className="text-muted-foreground mb-12 md:mb-16"
              orientation="horizontal"
            />

            <TaskManager />
          </div>

          {/* Quick Stats Section */}
          <div className="relative mt-16 md:mt-24">
            <DashedLine
              className="text-muted-foreground mb-12 md:mb-16"
              orientation="horizontal"
            />

            <h2 className="text-foreground mb-8 text-2xl tracking-tight md:text-3xl">
              Quick Stats
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardDescription>Total Users</CardDescription>
                  <CardTitle className="text-3xl">1,234</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    <span className="text-green-600 dark:text-green-400">
                      +12%
                    </span>{" "}
                    from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardDescription>Active Sessions</CardDescription>
                  <CardTitle className="text-3xl">89</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    <span className="text-green-600 dark:text-green-400">
                      +5%
                    </span>{" "}
                    from yesterday
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardDescription>API Requests</CardDescription>
                  <CardTitle className="text-3xl">45.2k</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    <span className="text-red-600 dark:text-red-400">
                      -3%
                    </span>{" "}
                    from last week
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Background>
  );
}
