import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  Target,
  BookOpen,
  TrendingUp,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  MessageSquare,
} from "lucide-react";

export function LandingPage() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState("");

  const features = [
    {
      icon: Bot,
      title: "AI Career Recommendations",
      description: "Get personalized career guidance powered by advanced AI that understands your goals, skills, and industry trends.",
      color: "primary",
    },
    {
      icon: BookOpen,
      title: "Suggested Courses",
      description: "Discover curated learning paths and courses tailored to your career objectives and skill gaps.",
      color: "success",
    },
    {
      icon: TrendingUp,
      title: "Skill Progress Tracking",
      description: "Monitor your growth with detailed analytics and progress reports that show your journey to success.",
      color: "primary",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with like-minded professionals, share experiences, and learn from success stories.",
      color: "success",
    },
  ];

  const benefits = [
    "Personalized AI career guidance",
    "Track progress with smart analytics",
    "Access curated learning resources",
    "Connect with professional community",
    "Set and achieve career milestones",
    "Get inspired by success stories",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 px-6">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            <Sparkles className="w-4 h-4 mr-2" />
            Your AI Career Mentor
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Aspira.ai — Your Career Mentor
            <br />
            <span className="text-white/90">Smarter Career Growth with AI</span>
          </h1>
          
          <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
           Your AI-powered mentor to help you discover career paths, build skills, and stay motivated. Aspira.ai creates personalized plans, recommends the right courses, and keeps you on track
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-lg px-8 py-6 text-lg font-semibold"
              onClick={() => navigate("/chat")}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Try Aspira.ai Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              onClick={() => navigate("/auth")}
            >
              <Target className="w-5 h-5 mr-2" />
              View Dashboard
            </Button>
          </div>
          
          <p className="text-white/60 mt-6 text-sm">
            ✨ Free to try • No credit card required • Get started in seconds
          </p>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Zap className="w-4 h-4 mr-2" />
              Powerful Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Everything You Need for
              <span className="gradient-text"> Career Success</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Aspira.ai combines AI-driven insights with practical tools to help you plan, learn, and succeed in your professional journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className={`card-hover border-0 shadow-lg ${
                  isHovered === feature.title ? 'shadow-primary' : ''
                }`}
                onMouseEnter={() => setIsHovered(feature.title)}
                onMouseLeave={() => setIsHovered("")}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-success/10 text-success border-success/20">
                <CheckCircle className="w-4 h-4 mr-2" />
                Benefits
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our
                <span className="gradient-text"> Aspira.ai - Your AI Career Mentor?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join thousands of professionals who have transformed their careers 
                with our intelligent guidance system.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-success rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Button
                size="lg"
                className="btn-primary mt-8 px-8 py-6 text-lg"
                onClick={() => navigate("/auth")}
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <div className="relative">
              <Card className="p-8 bg-gradient-subtle border-0 shadow-2xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Bot className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">AI-Powered Insights</h3>
                  <p className="text-muted-foreground mb-6">
                    Get personalized recommendations based on your skills, experience, 
                    and career aspirations.
                  </p>
                  <div className="flex justify-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "This platform completely transformed my career path!" - Roman Khan.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join our community and start your journey towards career success today.
            No commitment required - try it free!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-lg px-8 py-6 text-lg font-semibold"
              onClick={() => navigate("/chat")}
            >
              <Bot className="w-5 h-5 mr-2" />
              Try AI Mentor
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              onClick={() => navigate("/auth")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}