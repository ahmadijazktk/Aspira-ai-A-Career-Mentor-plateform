import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, TrendingUp, Clock, Award, Plus, CheckCircle } from "lucide-react";

export function GoalsPage() {
  const [goals] = useState([
    {
      id: 1,
      title: "Master React Development",
      description: "Complete advanced React course and build 3 projects",
      progress: 75,
      deadline: "2024-12-31",
      status: "active",
      category: "Technical",
      milestones: [
        { task: "Complete React Hooks course", completed: true },
        { task: "Build portfolio website", completed: true },
        { task: "Learn Redux toolkit", completed: true },
        { task: "Build e-commerce app", completed: false },
        { task: "Deploy projects", completed: false }
      ]
    },
    {
      id: 2,
      title: "Get AWS Certification",
      description: "Pass AWS Solutions Architect Associate exam",
      progress: 45,
      deadline: "2024-11-15",
      status: "active",
      category: "Certification",
      milestones: [
        { task: "Complete AWS course", completed: true },
        { task: "Practice labs", completed: true },
        { task: "Take practice exams", completed: false },
        { task: "Schedule certification", completed: false }
      ]
    },
    {
      id: 3,
      title: "Land Senior Developer Role",
      description: "Secure a senior frontend developer position",
      progress: 30,
      deadline: "2025-03-01",
      status: "active",
      category: "Career",
      milestones: [
        { task: "Update resume", completed: true },
        { task: "Build strong portfolio", completed: false },
        { task: "Network with professionals", completed: false },
        { task: "Apply to companies", completed: false }
      ]
    }
  ]);

  const [achievements] = useState([
    { title: "First React App", date: "2024-08-15", icon: "🎉" },
    { title: "100 Days Coding Streak", date: "2024-09-01", icon: "🔥" },
    { title: "JavaScript Expert", date: "2024-09-15", icon: "💻" },
    { title: "Open Source Contributor", date: "2024-09-20", icon: "🌟" }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Career Goals</h1>
          <p className="text-muted-foreground">Track your progress and achieve your career milestones</p>
        </div>
        <Button className="btn-primary">
          <Plus className="w-4 h-4 mr-2" />
          Add Goal
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Goals</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{goals.filter(g => g.status === 'active').length}</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Progress</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(goals.reduce((acc, goal) => acc + goal.progress, 0) / goals.length)}%
            </div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Achievements</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{achievements.length}</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="goals" className="space-y-4">
        <TabsList>
          <TabsTrigger value="goals">My Goals</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="goals" className="space-y-4">
          {goals.map((goal) => (
            <Card key={goal.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="flex items-center gap-2">
                      {goal.title}
                      <Badge variant="secondary">{goal.category}</Badge>
                    </CardTitle>
                    <CardDescription>{goal.description}</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{goal.deadline}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{goal.progress}%</span>
                  </div>
                  <Progress value={goal.progress} className="w-full" />
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Milestones</h4>
                  <div className="space-y-1">
                    {goal.milestones.map((milestone, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle 
                          className={`w-4 h-4 ${milestone.completed ? 'text-green-500' : 'text-gray-300'}`} 
                        />
                        <span className={milestone.completed ? 'line-through text-muted-foreground' : ''}>
                          {milestone.task}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{achievement.icon}</div>
                    <div>
                      <h3 className="font-medium">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}