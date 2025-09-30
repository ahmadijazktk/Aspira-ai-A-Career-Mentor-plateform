import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Bot,
  User,
  Send,
  Mic,
  MicOff,
  Lightbulb,
  BookOpen,
  Target,
  TrendingUp,
  MessageSquare,
  Sparkles,
} from "lucide-react";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

export function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content: "Hello! I'm your AI Career Mentor. I'm here to help you navigate your career journey, provide personalized advice, and support your professional growth. What would you like to discuss today?",
      timestamp: new Date(),
      suggestions: [
        "Help me choose a career path",
        "Suggest skills to learn for my role",
        "Create a learning roadmap",
        "Review my career goals",
      ],
    },
  ]);
  
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickActions = [
    {
      icon: Target,
      title: "Career Goals",
      description: "Set and track career objectives",
      prompt: "Help me set realistic career goals for the next 2 years",
    },
    {
      icon: BookOpen,
      title: "Learning Plan",
      description: "Get personalized courses",
      prompt: "Create a learning plan for advancing in my current role",
    },
    {
      icon: TrendingUp,
      title: "Skill Assessment",
      description: "Evaluate your current skills",
      prompt: "Assess my current skills and suggest areas for improvement",
    },
    {
      icon: Lightbulb,
      title: "Career Advice",
      description: "Get expert guidance",
      prompt: "What are the best strategies for career advancement in tech?",
    },
  ];

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const simulateAIResponse = (userMessage: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      const responses = [
        {
          content: "That's a great question! Based on your interests, I'd recommend exploring these areas:\n\n1. **Web Development** - High demand, good entry point\n2. **Data Science** - Growing field with excellent prospects\n3. **UX/UI Design** - Creative and technical blend\n\nWhich of these interests you most? I can provide a detailed roadmap for any path.",
          suggestions: ["Tell me more about web development", "Create a data science roadmap", "What skills do UX designers need?"],
        },
        {
          content: "I'd be happy to help you create a personalized learning plan! To give you the best recommendations, could you tell me:\n\n• Your current role or background\n• Specific skills you want to develop\n• Your preferred learning style\n• Time commitment you can make\n\nThis will help me design a roadmap that fits your schedule and goals.",
          suggestions: ["I'm a junior developer", "I want to learn cloud technologies", "I prefer hands-on projects"],
        },
        {
          content: "Excellent! Here's a strategic approach for career advancement in tech:\n\n🚀 **Technical Excellence**\n- Master your core technologies\n- Stay updated with industry trends\n- Contribute to open source projects\n\n💼 **Professional Growth**\n- Build a strong network\n- Seek mentorship opportunities\n- Take on leadership responsibilities\n\n📈 **Continuous Learning**\n- Obtain relevant certifications\n- Attend conferences and workshops\n- Share knowledge through writing/speaking\n\nWhich area would you like to focus on first?",
          suggestions: ["Help with networking", "Suggest certifications", "How to find mentors"],
        },
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const aiMessage: Message = {
        id: Date.now().toString(),
        type: "ai",
        content: randomResponse.content,
        timestamp: new Date(),
        suggestions: randomResponse.suggestions,
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleSendMessage = (messageContent?: string) => {
    const content = messageContent || inputValue.trim();
    if (!content) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    
    simulateAIResponse(content);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleVoiceInput = () => {
    setIsListening(!isListening);
    // Voice input functionality would be implemented here
  };

  const formatMessageContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return <strong key={index} className="text-primary">{line.slice(2, -2)}</strong>;
      }
      if (line.startsWith('• ')) {
        return <li key={index} className="ml-4">{line.slice(2)}</li>;
      }
      if (line.startsWith('🚀 ') || line.startsWith('💼 ') || line.startsWith('📈 ')) {
        return <h4 key={index} className="font-semibold text-primary mt-3 mb-1">{line}</h4>;
      }
      return line ? <p key={index} className="mb-2">{line}</p> : <br key={index} />;
    });
  };

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">AI Career Mentor</h1>
            <p className="text-sm text-muted-foreground">
              Your personal guide to career success
            </p>
          </div>
          <Badge className="ml-auto bg-success/10 text-success border-success/20">
            <Sparkles className="w-3 h-3 mr-1" />
            Online
          </Badge>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Messages */}
          <ScrollArea className="flex-1 p-6" ref={scrollAreaRef}>
            <div className="max-w-4xl mx-auto space-y-6">
              {messages.map((message) => (
                <div key={message.id} className="space-y-4">
                  <div
                    className={`flex gap-4 ${
                      message.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {message.type === "ai" && (
                      <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                    )}
                    
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.type === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-card border shadow-sm"
                      } chat-bubble`}
                    >
                      <div className="text-sm leading-relaxed">
                        {formatMessageContent(message.content)}
                      </div>
                      <div className="text-xs opacity-70 mt-2">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>

                    {message.type === "user" && (
                      <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5" />
                      </div>
                    )}
                  </div>

                  {/* AI Suggestions */}
                  {message.type === "ai" && message.suggestions && (
                    <div className="flex gap-2 flex-wrap ml-12">
                      {message.suggestions.map((suggestion, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="text-xs hover:bg-primary hover:text-primary-foreground"
                          onClick={() => handleSendMessage(suggestion)}
                        >
                          {suggestion}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-card border rounded-2xl px-4 py-3 shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse delay-100"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="border-t border-border bg-card p-6">
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about your career..."
                    className="pr-12 min-h-[50px] text-base"
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    className={`absolute right-2 top-1/2 -translate-y-1/2 ${
                      isListening ? "text-red-500" : "text-muted-foreground"
                    }`}
                    onClick={toggleVoiceInput}
                  >
                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </Button>
                </div>
                <Button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  className="btn-primary min-h-[50px] px-6"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Sidebar */}
        <div className="w-80 border-l border-border bg-muted/30 p-6 hidden lg:block">
          <h3 className="font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            {quickActions.map((action, index) => (
              <Card
                key={index}
                className="cursor-pointer hover:shadow-md transition-all border-0 card-hover"
                onClick={() => handleSendMessage(action.prompt)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <action.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm">{action.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {action.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}