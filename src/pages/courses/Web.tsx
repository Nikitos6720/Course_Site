import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import webDevImg from "@/assets/web-dev.jpg";
import { CheckCircle2 } from "lucide-react";

const Web = () => {
  const curriculum = [
    "HTML5, CSS3, and Modern JavaScript",
    "React, Vue, and Angular Frameworks",
    "Responsive Design and Mobile-First Development",
    "Web Performance Optimization",
    "Progressive Web Applications (PWAs)",
    "Web Accessibility Standards",
    "RESTful APIs and GraphQL",
    "Web Security Best Practices",
    "Modern Build Tools and Workflows",
    "UI/UX Design Principles",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <img 
              src={webDevImg} 
              alt="Web Development" 
              className="w-full h-[400px] object-cover rounded-lg neon-border mb-8"
            />
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-text font-['Orbitron']">
              Web Development
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              Build modern, responsive websites and web applications from scratch. Master the latest 
              web technologies and frameworks used by leading companies worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-card border-primary/20 neon-border">
              <h2 className="text-2xl font-bold mb-4 text-primary font-['Orbitron']">
                Program Overview
              </h2>
              <p className="text-muted-foreground mb-4">
                Our Web Development program provides comprehensive training in both frontend and 
                design aspects of modern web development. Create stunning, user-friendly websites 
                that work seamlessly across all devices.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                  Duration: 3 years
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                  Degree: Bachelor of Science
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                  Format: On-campus & Online
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-primary/20 neon-border">
              <h2 className="text-2xl font-bold mb-4 text-primary font-['Orbitron']">
                Career Opportunities
              </h2>
              <p className="text-muted-foreground mb-4">
                Graduates pursue exciting careers in:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                  Frontend Developer
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                  UI/UX Engineer
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                  Web Designer
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                  JavaScript Specialist
                </li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-card border-primary/20 neon-border mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center neon-text font-['Orbitron']">
              What You'll Learn
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {curriculum.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 mr-3 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="text-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow text-lg px-8 py-6">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web;
