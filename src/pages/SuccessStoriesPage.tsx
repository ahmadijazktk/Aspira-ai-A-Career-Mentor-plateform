import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, TrendingUp, MapPin, Calendar, Plus } from "lucide-react";

export function SuccessStoriesPage() {
  const [stories] = useState([
    {
      id: 1,
      name: "Sarah Chen",
      role: "Senior Frontend Developer",
      company: "Microsoft",
      location: "Seattle, WA",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      story: "Started as a complete beginner in programming. With the AI mentor's guidance, I learned React, built 5 projects, and landed my dream job at Microsoft within 8 months!",
      skills: ["React", "TypeScript", "JavaScript", "CSS"],
      timeframe: "8 months",
      salaryIncrease: "150%",
      rating: 5,
      date: "2024-09-15",
      featured: true
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      role: "Full Stack Developer",
      company: "Shopify",
      location: "Ottawa, Canada",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      story: "Transitioned from marketing to tech. The AI mentor helped me create a structured learning path and build a portfolio that impressed recruiters.",
      skills: ["Node.js", "React", "Python", "AWS"],
      timeframe: "12 months",
      salaryIncrease: "200%",
      rating: 5,
      date: "2024-08-22",
      featured: true
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "DevOps Engineer",
      company: "Netflix",
      location: "Los Angeles, CA",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      story: "Self-taught through the AI mentor platform. Focused on cloud technologies and automation. Now managing infrastructure for millions of users!",
      skills: ["Docker", "Kubernetes", "AWS", "Python"],
      timeframe: "10 months",
      salaryIncrease: "180%",
      rating: 5,
      date: "2024-07-10",
      featured: false
    },
    {
      id: 4,
      name: "David Kim",
      role: "Mobile Developer",
      company: "Uber",
      location: "San Francisco, CA",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      story: "Started learning React Native through the platform. The personalized learning path and project suggestions helped me build apps that got noticed.",
      skills: ["React Native", "Swift", "Kotlin", "Firebase"],
      timeframe: "9 months",
      salaryIncrease: "170%",
      rating: 5,
      date: "2024-06-18",
      featured: false
    },
    {
      id: 5,
      name: "Priya Patel",
      role: "Data Scientist",
      company: "Google",
      location: "Mountain View, CA",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      story: "Leveraged the AI mentor to transition from finance to data science. Built ML projects and gained the skills needed for my dream role at Google.",
      skills: ["Python", "TensorFlow", "SQL", "R"],
      timeframe: "14 months",
      salaryIncrease: "220%",
      rating: 5,
      date: "2024-05-03",
      featured: true
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "Cybersecurity Analyst",
      company: "IBM",
      location: "Austin, TX",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      story: "Used the AI mentor to learn cybersecurity fundamentals and ethical hacking. The structured approach helped me land a security role.",
      skills: ["Linux", "Python", "Networking", "Penetration Testing"],
      timeframe: "11 months",
      salaryIncrease: "160%",
      rating: 4,
      date: "2024-04-12",
      featured: false
    }
  ]);

  const featuredStories = stories.filter(story => story.featured);
  const allStories = stories;

  const stats = {
    totalStories: stories.length,
    averageTimeframe: Math.round(stories.reduce((acc, story) => acc + parseInt(story.timeframe), 0) / stories.length),
    averageSalaryIncrease: Math.round(stories.reduce((acc, story) => acc + parseInt(story.salaryIncrease.replace('%', '')), 0) / stories.length),
    topCompanies: ["Microsoft", "Google", "Netflix", "Uber", "Shopify"]
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Success Stories</h1>
          <p className="text-muted-foreground">Get inspired by our community's career transformations</p>
        </div>
        <Button className="btn-primary">
          <Plus className="w-4 h-4 mr-2" />
          Share Your Story
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Stories</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalStories}</div>
            <p className="text-xs text-muted-foreground">Verified career transformations</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Time to Success</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.averageTimeframe} months</div>
            <p className="text-xs text-muted-foreground">From start to career change</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Salary Increase</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.averageSalaryIncrease}%</div>
            <p className="text-xs text-muted-foreground">Career advancement</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Companies</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.topCompanies.length}</div>
            <p className="text-xs text-muted-foreground">Fortune 500 placements</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="featured" className="space-y-4">
        <TabsList>
          <TabsTrigger value="featured">Featured Stories</TabsTrigger>
          <TabsTrigger value="all">All Stories</TabsTrigger>
        </TabsList>

        <TabsContent value="featured" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredStories.map((story) => (
              <Card key={story.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={story.avatar} alt={story.name} />
                      <AvatarFallback>{story.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{story.name}</CardTitle>
                        <Badge variant="secondary">Featured</Badge>
                      </div>
                      <CardDescription>
                        {story.role} at {story.company}
                      </CardDescription>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {story.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-relaxed">{story.story}</p>
                  
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1">
                      {story.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Time to Success:</span>
                      <div className="text-muted-foreground">{story.timeframe}</div>
                    </div>
                    <div>
                      <span className="font-medium">Salary Increase:</span>
                      <div className="text-green-600 font-medium">+{story.salaryIncrease}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      {story.rating}/5 stars
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {allStories.map((story) => (
              <Card key={story.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={story.avatar} alt={story.name} />
                      <AvatarFallback>{story.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1 flex-1">
                      <CardTitle className="text-base">{story.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {story.role} at {story.company}
                      </CardDescription>
                    </div>
                    {story.featured && <Badge variant="secondary">Featured</Badge>}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm leading-relaxed line-clamp-3">{story.story}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {story.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {story.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{story.skills.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{story.timeframe}</span>
                    <span className="text-green-600 font-medium">+{story.salaryIncrease}</span>
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