import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { BookOpen, Clock, Star, Users, Search, Filter, Zap } from "lucide-react";

export function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const courses = [
    {
      id: 1,
      title: "Advanced JavaScript Patterns",
      description: "Master complex JavaScript concepts, design patterns, and modern ES6+ features",
      platform: "TechLearn",
      duration: "6 hours",
      rating: 4.8,
      students: 12500,
      category: "Development",
      level: "Advanced",
      price: "Free",
      aiRecommended: true,
      image: "/api/placeholder/300/200",
      tags: ["JavaScript", "ES6", "Design Patterns"],
    },
    {
      id: 2,
      title: "System Design Interview Prep",
      description: "Comprehensive guide to system design interviews with real-world examples",
      platform: "CareerBoost",
      duration: "3 days",
      rating: 4.9,
      students: 8900,
      category: "Interview",
      level: "Intermediate",
      price: "$49",
      aiRecommended: true,
      image: "/api/placeholder/300/200",
      tags: ["System Design", "Interviews", "Architecture"],
    },
    {
      id: 3,
      title: "Cloud Architecture Fundamentals",
      description: "Learn cloud computing concepts, AWS services, and scalable architecture design",
      platform: "CloudAcademy",
      duration: "2 weeks",
      rating: 4.7,
      students: 15600,
      category: "Cloud",
      level: "Beginner",
      price: "$89",
      aiRecommended: false,
      image: "/api/placeholder/300/200",
      tags: ["AWS", "Cloud", "Architecture"],
    },
    {
      id: 4,
      title: "React Performance Optimization",
      description: "Advanced techniques to optimize React applications for better performance",
      platform: "ReactMasters",
      duration: "4 hours",
      rating: 4.6,
      students: 7200,
      category: "Development",
      level: "Advanced",
      price: "Free",
      aiRecommended: true,
      image: "/api/placeholder/300/200",
      tags: ["React", "Performance", "Optimization"],
    },
    {
      id: 5,
      title: "Data Structures & Algorithms",
      description: "Comprehensive course covering essential DSA concepts for coding interviews",
      platform: "AlgoAcademy",
      duration: "8 weeks",
      rating: 4.8,
      students: 25000,
      category: "Interview",
      level: "Intermediate",
      price: "$129",
      aiRecommended: false,
      image: "/api/placeholder/300/200",
      tags: ["DSA", "Algorithms", "Coding"],
    },
    {
      id: 6,
      title: "Machine Learning for Beginners",
      description: "Introduction to ML concepts, Python, and practical applications",
      platform: "MLLearn",
      duration: "6 weeks",
      rating: 4.5,
      students: 18900,
      category: "AI/ML",
      level: "Beginner",
      price: "$99",
      aiRecommended: false,
      image: "/api/placeholder/300/200",
      tags: ["Machine Learning", "Python", "AI"],
    },
  ];

  const categories = [
    { id: "all", name: "All Courses" },
    { id: "Development", name: "Development" },
    { id: "Interview", name: "Interview Prep" },
    { id: "Cloud", name: "Cloud Computing" },
    { id: "AI/ML", name: "AI & Machine Learning" },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-700 border-green-200";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Advanced":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="p-6 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Suggested Courses</h1>
            <p className="text-muted-foreground">Discover curated learning paths tailored to your goals</p>
          </div>
          <Button className="btn-primary">
            <BookOpen className="w-4 h-4 mr-2" />
            My Learning
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search courses, skills, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "btn-primary" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Zap className="w-6 h-6 text-primary" />
          AI Recommended for You
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses
            .filter(course => course.aiRecommended)
            .map((course) => (
              <Card key={course.id} className="border-0 shadow-lg card-hover relative overflow-hidden">
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-primary text-primary-foreground">
                    <Zap className="w-3 h-3 mr-1" />
                    AI Pick
                  </Badge>
                </div>
                
                <div className="h-48 bg-gradient-subtle"></div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                    <Badge className="bg-success/10 text-success border-success/20">
                      {course.price}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{course.platform}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {course.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full btn-primary">
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

      {/* All Courses */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">All Courses</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses
            .filter(course => !course.aiRecommended)
            .map((course) => (
              <Card key={course.id} className="border-0 shadow-lg card-hover">
                <div className="h-48 bg-gradient-subtle"></div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                    <Badge variant="outline">
                      {course.price}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{course.platform}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {course.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No courses found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}