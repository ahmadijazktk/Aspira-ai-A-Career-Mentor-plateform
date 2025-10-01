import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
  Target,
  BookOpen,
  Calendar,
  Award,
  Users,
  MessageSquare,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const navigate = useNavigate();
  const [userName] = useState(""); // This would come from user context

  const stats = [
    {
      title: "Tasks Completed",
      value: "12",
      total: "20",
      progress: 60,
      icon: CheckCircle,
      color: "success",
      description: "This week",
    },
    {
      title: "Skills Learned",
      value: "8",
      total: "15",
      progress: 53,
      icon: BookOpen,
      color: "primary",
      description: "This month",
    },
    {
      title: "Milestones Achieved",
      value: "3",
      total: "5",
      progress: 60,
      icon: Award,
      color: "success",
      description: "Career goals",
    },
    {
      title: "Study Streak",
      value: "7",
      unit: "days",
      progress: 70,
      icon: Calendar,
      color: "primary",
      description: "Current streak",
    },
  ];

  const recentTasks = [
    {
      title: "Complete React Fundamentals Course",
      status: "in-progress",
      progress: 75,
      dueDate: "Today",
      priority: "high",
    },
    {
      title: "Build Portfolio Website",
      status: "pending",
      progress: 0,
      dueDate: "Tomorrow",
      priority: "medium",
    },
    {
      title: "Practice Data Structures",
      status: "completed",
      progress: 100,
      dueDate: "Yesterday",
      priority: "low",
    },
  ];

  const recommendations = [
    {
      title: "Advanced JavaScript Patterns",
      type: "Course",
      platform: "TechLearn",
      duration: "6 hours",
      rating: 4.8,
      category: "Development",
    },
    {
      title: "System Design Interview Prep",
      type: "Workshop",
      platform: "CareerBoost",
      duration: "3 days",
      rating: 4.9,
      category: "Interview",
    },
    {
      title: "Cloud Architecture Fundamentals",
      type: "Certification",
      platform: "CloudAcademy",
      duration: "2 weeks",
      rating: 4.7,
      category: "Cloud",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success text-success-foreground";
      case "in-progress":
        return "bg-primary text-primary-foreground";
      case "pending":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="p-6 space-y-8 max-w-7xl mx-auto">
      {/* Welcome Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">
          Good morning, {userName}! 👋
        </h1>
        <p className="text-muted-foreground text-lg">
          Here's your career progress overview. Keep up the great work!
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={stat.title} className="card-hover border-0 shadow-lg">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-lg bg-gradient-${stat.color}`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {stat.description}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">{stat.value}</span>
                  {stat.total && (
                    <span className="text-muted-foreground">/ {stat.total}</span>
                  )}
                  {stat.unit && (
                    <span className="text-muted-foreground text-sm">{stat.unit}</span>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{stat.title}</span>
                    <span className="text-muted-foreground">{stat.progress}%</span>
                  </div>
                  <Progress value={stat.progress} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Tasks & Progress */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Tasks */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Recent Tasks
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate("/tasks")}
                >
                  View All
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <CardDescription>
                Track your daily and weekly tasks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentTasks.map((task, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <h4 className="font-medium">{task.title}</h4>
                      <Badge className={getStatusColor(task.status)}>
                        {task.status.replace("-", " ")}
                      </Badge>
                      <Badge variant="outline" className={getPriorityColor(task.priority)}>
                        {task.priority}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Due {task.dueDate}
                      </div>
                      <div>Progress: {task.progress}%</div>
                    </div>
                    {task.progress > 0 && (
                      <Progress value={task.progress} className="h-1.5" />
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* AI Chat Preview */}
          <Card className="border-0 shadow-lg bg-gradient-subtle">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                AI Mentor Quick Chat
              </CardTitle>
              <CardDescription>
                Get instant career advice and guidance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-white/70 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">AI Mentor suggests:</p>
                  <p className="font-medium">
                    "Based on your progress, I recommend focusing on system design concepts 
                    to prepare for senior developer roles. Would you like me to create a 
                    personalized learning plan?"
                  </p>
                </div>
                <Button
                  className="btn-primary w-full"
                  onClick={() => navigate("/chat")}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Start Conversation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Content */}
        <div className="space-y-6">
          {/* AI Recommendations */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                AI Recommendations
              </CardTitle>
              <CardDescription>
                Personalized suggestions for you
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="p-4 rounded-lg border hover:shadow-md transition-all cursor-pointer">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-sm leading-tight">{rec.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {rec.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{rec.type}</span>
                      <span>•</span>
                      <span>{rec.platform}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{rec.duration}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>{rec.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <Button
                variant="outline"
                className="w-full"
                onClick={() => navigate("/courses")}
              >
                View All Courses
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => navigate("/community")}
              >
                <Users className="w-4 h-4 mr-2" />
                Join Community Discussion
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => navigate("/success-stories")}
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Read Success Stories
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => navigate("/goals")}
              >
                <Target className="w-4 h-4 mr-2" />
                Set New Goals
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}