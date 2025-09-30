import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, CheckCircle, Clock, Plus, Filter, Target } from "lucide-react";

export function TasksPage() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete React Fundamentals Course",
      description: "Master React hooks, components, and state management",
      status: "in-progress",
      progress: 75,
      dueDate: "2024-01-15",
      priority: "high",
      category: "Learning",
      completed: false,
    },
    {
      id: 2,
      title: "Build Portfolio Website",
      description: "Create a professional portfolio showcasing projects",
      status: "pending",
      progress: 0,
      dueDate: "2024-01-20",
      priority: "medium",
      category: "Project",
      completed: false,
    },
    {
      id: 3,
      title: "Practice Data Structures",
      description: "Solve 20 data structure problems on LeetCode",
      status: "completed",
      progress: 100,
      dueDate: "2024-01-10",
      priority: "low",
      category: "Practice",
      completed: true,
    },
    {
      id: 4,
      title: "Network with Industry Professionals",
      description: "Connect with 5 professionals on LinkedIn",
      status: "in-progress",
      progress: 40,
      dueDate: "2024-01-25",
      priority: "medium",
      category: "Networking",
      completed: false,
    },
  ]);

  const milestones = [
    {
      title: "Frontend Developer Path",
      description: "Complete fundamental frontend skills",
      progress: 68,
      tasks: 12,
      completedTasks: 8,
      badge: "In Progress",
    },
    {
      title: "JavaScript Mastery",
      description: "Advanced JavaScript concepts and patterns",
      progress: 45,
      tasks: 15,
      completedTasks: 7,
      badge: "Active",
    },
    {
      title: "Portfolio Development",
      description: "Build and deploy professional portfolio",
      progress: 30,
      tasks: 8,
      completedTasks: 2,
      badge: "Upcoming",
    },
  ];

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { 
            ...task, 
            completed: !task.completed,
            status: !task.completed ? "completed" : "pending",
            progress: !task.completed ? 100 : 0
          }
        : task
    ));
  };

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
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Tasks & Milestones</h1>
          <p className="text-muted-foreground">Track your progress and achieve your career goals</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button className="btn-primary">
            <Plus className="w-4 h-4 mr-2" />
            Add Task
          </Button>
        </div>
      </div>

      {/* Milestones */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Target className="w-6 h-6" />
          Career Milestones
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {milestones.map((milestone, index) => (
            <Card key={index} className="border-0 shadow-lg card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{milestone.title}</CardTitle>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    {milestone.badge}
                  </Badge>
                </div>
                <CardDescription>{milestone.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>{milestone.completedTasks} of {milestone.tasks} tasks</span>
                  <span className="font-medium">{milestone.progress}%</span>
                </div>
                <Progress value={milestone.progress} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Tasks */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Active Tasks</h2>
        
        <div className="space-y-4">
          {tasks.map((task) => (
            <Card key={task.id} className="border-0 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => toggleTaskCompletion(task.id)}
                    className="mt-1"
                  />
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className={`font-semibold ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                          {task.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {task.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(task.status)}>
                          {task.status.replace("-", " ")}
                        </Badge>
                        <Badge variant="outline" className={getPriorityColor(task.priority)}>
                          {task.priority}
                        </Badge>
                        <Badge variant="outline">
                          {task.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Due: {new Date(task.dueDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Progress: {task.progress}%
                      </div>
                    </div>
                    
                    {!task.completed && (
                      <div className="space-y-2">
                        <Progress value={task.progress} className="h-2" />
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center border-0 shadow-lg">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-primary">{tasks.filter(t => t.completed).length}</div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </CardContent>
        </Card>
        <Card className="text-center border-0 shadow-lg">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-yellow-600">{tasks.filter(t => t.status === 'in-progress').length}</div>
            <div className="text-sm text-muted-foreground">In Progress</div>
          </CardContent>
        </Card>
        <Card className="text-center border-0 shadow-lg">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-muted-foreground">{tasks.filter(t => t.status === 'pending').length}</div>
            <div className="text-sm text-muted-foreground">Pending</div>
          </CardContent>
        </Card>
        <Card className="text-center border-0 shadow-lg">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-success">
              {Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100)}%
            </div>
            <div className="text-sm text-muted-foreground">Completion Rate</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}