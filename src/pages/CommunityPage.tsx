import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, ThumbsUp, Users, TrendingUp, Plus, Pin, Clock } from "lucide-react";

export function CommunityPage() {
  const [discussions] = useState([
    {
      id: 1,
      title: "Best practices for React performance optimization",
      author: "Sarah Dev",
      avatar: "/placeholder.svg",
      category: "Frontend",
      replies: 23,
      likes: 45,
      isPinned: true,
      timestamp: "2 hours ago",
      preview: "I've been working on optimizing a large React app and wanted to share some techniques that have really helped...",
      tags: ["React", "Performance", "Optimization"]
    },
    {
      id: 2,
      title: "Career transition from marketing to software engineering",
      author: "Alex Chen",
      avatar: "/placeholder.svg",
      category: "Career",
      replies: 18,
      likes: 67,
      isPinned: false,
      timestamp: "5 hours ago",
      preview: "Just completed my first year as a software engineer after transitioning from marketing. Happy to share my journey...",
      tags: ["Career Change", "Advice", "Success Story"]
    },
    {
      id: 3,
      title: "Which cloud certification should I pursue first?",
      author: "Mike Johnson",
      avatar: "/placeholder.svg",
      category: "Cloud",
      replies: 31,
      likes: 29,
      isPinned: false,
      timestamp: "8 hours ago",
      preview: "I'm looking to get into cloud computing and torn between AWS, Azure, and GCP. What would you recommend...",
      tags: ["AWS", "Azure", "GCP", "Certification"]
    },
    {
      id: 4,
      title: "Free resources for learning TypeScript",
      author: "Emma Wilson",
      avatar: "/placeholder.svg",
      category: "Learning",
      replies: 42,
      likes: 89,
      isPinned: true,
      timestamp: "1 day ago",
      preview: "Compiled a list of the best free TypeScript resources that helped me master the language...",
      tags: ["TypeScript", "Resources", "Free"]
    },
    {
      id: 5,
      title: "Docker vs Kubernetes: When to use what?",
      author: "David Kumar",
      avatar: "/placeholder.svg",
      category: "DevOps",
      replies: 15,
      likes: 38,
      isPinned: false,
      timestamp: "2 days ago",
      preview: "New to containerization and confused about when to use Docker vs Kubernetes. Can someone explain...",
      tags: ["Docker", "Kubernetes", "DevOps"]
    }
  ]);

  const [categories] = useState([
    { name: "Frontend", count: 124, color: "bg-blue-500" },
    { name: "Backend", count: 89, color: "bg-green-500" },
    { name: "DevOps", count: 67, color: "bg-orange-500" },
    { name: "Career", count: 156, color: "bg-purple-500" },
    { name: "Learning", count: 98, color: "bg-pink-500" },
    { name: "Cloud", count: 73, color: "bg-cyan-500" }
  ]);

  const [topContributors] = useState([
    { name: "Sarah Dev", avatar: "/placeholder.svg", posts: 45, reputation: 892 },
    { name: "Alex Chen", avatar: "/placeholder.svg", posts: 38, reputation: 756 },
    { name: "Emma Wilson", avatar: "/placeholder.svg", posts: 32, reputation: 689 },
    { name: "Mike Johnson", avatar: "/placeholder.svg", posts: 28, reputation: 612 },
    { name: "David Kumar", avatar: "/placeholder.svg", posts: 24, reputation: 543 }
  ]);

  const communityStats = {
    totalMembers: 12547,
    activeToday: 1834,
    totalDiscussions: 3456,
    totalReplies: 18923
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Community</h1>
          <p className="text-muted-foreground">Connect, learn, and grow with fellow developers</p>
        </div>
        <Button className="btn-primary">
          <Plus className="w-4 h-4 mr-2" />
          Start Discussion
        </Button>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{communityStats.totalMembers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+234 this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Today</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{communityStats.activeToday.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+12% from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Discussions</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{communityStats.totalDiscussions.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+45 today</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Replies</CardTitle>
            <ThumbsUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{communityStats.totalReplies.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+156 today</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          <Tabs defaultValue="recent" className="space-y-4">
            <TabsList>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
            </TabsList>

            <TabsContent value="recent" className="space-y-4">
              {discussions.map((discussion) => (
                <Card key={discussion.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={discussion.avatar} alt={discussion.author} />
                        <AvatarFallback>{discussion.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              {discussion.isPinned && <Pin className="w-4 h-4 text-primary" />}
                              <h3 className="font-medium hover:text-primary transition-colors">
                                {discussion.title}
                              </h3>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>{discussion.author}</span>
                              <span>•</span>
                              <Clock className="w-3 h-3" />
                              <span>{discussion.timestamp}</span>
                              <span>•</span>
                              <Badge variant="outline" className="text-xs">
                                {discussion.category}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {discussion.preview}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {discussion.tags.map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MessageSquare className="w-4 h-4" />
                              <span>{discussion.replies}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="w-4 h-4" />
                              <span>{discussion.likes}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="trending" className="space-y-4">
              {discussions
                .sort((a, b) => b.likes - a.likes)
                .map((discussion) => (
                  <Card key={discussion.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={discussion.avatar} alt={discussion.author} />
                          <AvatarFallback>{discussion.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <h3 className="font-medium hover:text-primary transition-colors">
                                {discussion.title}
                              </h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span>{discussion.author}</span>
                                <span>•</span>
                                <span>{discussion.timestamp}</span>
                              </div>
                            </div>
                            <Badge className="bg-orange-100 text-orange-800">Trending</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{discussion.preview}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1">
                              {discussion.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MessageSquare className="w-4 h-4" />
                                <span>{discussion.replies}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <ThumbsUp className="w-4 h-4" />
                                <span>{discussion.likes}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>

            <TabsContent value="unanswered" className="space-y-4">
              {discussions
                .filter(d => d.replies === 0)
                .map((discussion) => (
                  <Card key={discussion.id} className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-orange-500">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={discussion.avatar} alt={discussion.author} />
                          <AvatarFallback>{discussion.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <h3 className="font-medium hover:text-primary transition-colors">
                                {discussion.title}
                              </h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span>{discussion.author}</span>
                                <span>•</span>
                                <span>{discussion.timestamp}</span>
                              </div>
                            </div>
                            <Badge variant="destructive">Needs Help</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{discussion.preview}</p>
                          <div className="flex flex-wrap gap-1">
                            {discussion.tags.map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {categories.map((category, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-accent cursor-pointer transition-colors">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${category.color}`} />
                    <span className="text-sm">{category.name}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Top Contributors */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Top Contributors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {topContributors.map((contributor, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={contributor.avatar} alt={contributor.name} />
                    <AvatarFallback>{contributor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{contributor.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {contributor.posts} posts • {contributor.reputation} rep
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}