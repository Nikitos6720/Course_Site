import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import fullstackImg from "@/assets/fullstack.jpg";
import { CheckCircle2 } from "lucide-react";

const FullStack = () => {
  const curriculum = [
    "Frontend Development (React, Vue, Angular)",
    "Backend Development (Node.js, Python, Java)",
    "Database Design (SQL & NoSQL)",
    "RESTful APIs and Microservices",
    "Cloud Platforms (AWS, Azure, GCP)",
    "DevOps and CI/CD Pipelines",
    "Authentication and Authorization",
    "Server Management and Deployment",
    "Containerization with Docker & Kubernetes",
    "System Architecture and Design Patterns",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <img 
              src={fullstackImg} 
              alt="Full Stack Development" 
              className="w-full h-[400px] object-cover rounded-lg neon-border mb-8"
            />
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-text font-['Orbitron']">
              Full Stack Development
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              Become a complete developer with frontend and backend expertise. Master the entire 
              web development stack from database to user interface.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-card border-primary/20 neon-border">
              <h2 className="text-2xl font-bold mb-4 text-primary font-['Orbitron']">
                Program Overview
              </h2>
              <p className="text-muted-foreground mb-4">
                Our Full Stack Development program provides comprehensive training in all aspects of 
                modern web application development. Learn to build complete, production-ready 
                applications from scratch.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                  Duration: 4 years
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                  Degree: Bachelor of Science
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                  Format: On-campus & Hybrid
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
                  Full Stack Developer
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                  Software Engineer
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                  DevOps Engineer
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                  Solutions Architect
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

export default FullStack;
