import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { 
  Download, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  CheckCircle
} from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export function ResumePage() {
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [personalInfo, setPersonalInfo] = useState({
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/johndoe",
    portfolio: "portfolio.com"
  });

  // Simulated completed skills from courses
  const [completedSkills] = useState([
    { name: "React", level: "Advanced", completedDate: "2024-09", category: "Frontend" },
    { name: "TypeScript", level: "Intermediate", completedDate: "2024-08", category: "Languages" },
    { name: "Node.js", level: "Intermediate", completedDate: "2024-07", category: "Backend" },
    { name: "UI/UX Design", level: "Beginner", completedDate: "2024-06", category: "Design" },
    { name: "Python", level: "Advanced", completedDate: "2024-05", category: "Languages" },
  ]);

  // Simulated completed tasks/projects
  const [completedTasks] = useState([
    {
      title: "E-commerce Platform",
      description: "Built a full-stack e-commerce application with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      completedDate: "2024-09"
    },
    {
      title: "Task Management App",
      description: "Created a collaborative task management tool with real-time updates",
      technologies: ["React", "TypeScript", "Firebase"],
      completedDate: "2024-07"
    },
    {
      title: "Portfolio Website",
      description: "Designed and developed a responsive portfolio showcasing projects",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      completedDate: "2024-05"
    }
  ]);

  // Simulated milestones
  const [milestones] = useState([
    { title: "Frontend Master", completed: true, date: "2024-09" },
    { title: "Full Stack Developer", completed: true, date: "2024-08" },
    { title: "First Job Application", completed: true, date: "2024-07" },
    { title: "10 Projects Completed", completed: true, date: "2024-06" }
  ]);

  const [summary, setSummary] = useState(
    "Passionate and dedicated developer with expertise in modern web technologies. Committed to creating efficient, scalable, and user-friendly applications. Strong problem-solving skills and a continuous learner."
  );

  const exportToPDF = async () => {
    try {
      const resumeElement = document.getElementById("resume-content");
      if (!resumeElement) return;

      toast({
        title: "Generating PDF...",
        description: "Please wait while we create your resume",
      });

      const canvas = await html2canvas(resumeElement, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${user?.name || "Resume"}_CV.pdf`);

      toast({
        title: "Success!",
        description: "Your resume has been downloaded",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  const completedMilestones = milestones.filter(m => m.completed);
  const canExport = completedMilestones.length >= 3;

  return (
    <div className="space-y-6 pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Resume Builder</h1>
          <p className="text-muted-foreground">Build and export your professional CV</p>
        </div>
        <Button
          onClick={exportToPDF}
          disabled={!canExport}
          className="btn-primary"
        >
          <Download className="w-4 h-4 mr-2" />
          Export to PDF
        </Button>
      </div>

      {!canExport && (
        <Card className="border-warning bg-warning/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-warning mt-0.5" />
              <div>
                <p className="font-medium">Complete more milestones to unlock PDF export</p>
                <p className="text-sm text-muted-foreground mt-1">
                  You've completed {completedMilestones.length} of 3 required milestones
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Edit Personal Info */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your contact details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={personalInfo.phone}
                onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={personalInfo.location}
                onChange={(e) => setPersonalInfo({ ...personalInfo, location: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input
                id="linkedin"
                value={personalInfo.linkedin}
                onChange={(e) => setPersonalInfo({ ...personalInfo, linkedin: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="portfolio">Portfolio</Label>
              <Input
                id="portfolio"
                value={personalInfo.portfolio}
                onChange={(e) => setPersonalInfo({ ...personalInfo, portfolio: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="summary">Professional Summary</Label>
            <Textarea
              id="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              rows={4}
            />
          </div>
        </CardContent>
      </Card>

      {/* Resume Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Resume Preview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div id="resume-content" className="bg-white text-black p-8 rounded-lg space-y-6">
            {/* Header */}
            <div className="text-center border-b border-gray-300 pb-6">
              <div className="flex justify-center mb-4">
                <Avatar className="w-24 h-24 border-4 border-gray-200">
                  <AvatarImage src={user?.avatar} alt={user?.name} />
                  <AvatarFallback className="text-2xl bg-gray-200 text-gray-700">
                    {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
                  </AvatarFallback>
                </Avatar>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{user?.name}</h1>
              <p className="text-lg text-gray-600 mb-4">Full Stack Developer</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  {user?.email}
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  {personalInfo.phone}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {personalInfo.location}
                </div>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">{summary}</p>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Code className="w-5 h-5" />
                Technical Skills
              </h2>
              <div className="space-y-3">
                {Object.entries(
                  completedSkills.reduce((acc, skill) => {
                    if (!acc[skill.category]) acc[skill.category] = [];
                    acc[skill.category].push(skill);
                    return acc;
                  }, {} as Record<string, typeof completedSkills>)
                ).map(([category, skills]) => (
                  <div key={category}>
                    <p className="text-sm font-semibold text-gray-800 mb-1">{category}:</p>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm border border-gray-300"
                        >
                          {skill.name} • {skill.level}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Projects
              </h2>
              <div className="space-y-4">
                {completedTasks.map((task, index) => (
                  <div key={index} className="border-l-2 border-gray-300 pl-4">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold text-gray-900">{task.title}</h3>
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {task.completedDate}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{task.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {task.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-gray-200 text-gray-700 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Milestones & Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {completedMilestones.map((milestone, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>{milestone.title}</span>
                    <span className="text-gray-500 text-xs">({milestone.date})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Skills Completed</CardTitle>
            <Code className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedSkills.length}</div>
            <p className="text-xs text-muted-foreground">Across {new Set(completedSkills.map(s => s.category)).size} categories</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projects Completed</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedTasks.length}</div>
            <p className="text-xs text-muted-foreground">Portfolio-ready projects</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Milestones Achieved</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedMilestones.length}</div>
            <p className="text-xs text-muted-foreground">Career achievements</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
