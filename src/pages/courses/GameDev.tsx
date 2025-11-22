import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import gameDevImg from "@/assets/game-dev.jpg";
import { CheckCircle2 } from "lucide-react";

const GameDev = () => {
  const curriculum = [
    "Game Engine Fundamentals (Unity & Unreal)",
    "3D Modeling and Animation",
    "Game Physics and Mathematics",
    "Level Design and World Building",
    "Gameplay Programming",
    "Character Design and Development",
    "Game AI and Behavior Systems",
    "Multiplayer and Network Programming",
    "VR/AR Game Development",
    "Game Monetization Strategies",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <img 
              src={gameDevImg} 
              alt="Game Development" 
              className="w-full h-[400px] object-cover rounded-lg neon-border mb-8"
            />
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-text font-['Orbitron']">
              Game Development
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              Master the art of creating immersive gaming experiences with cutting-edge technology. 
              Learn to design, develop, and deploy games across multiple platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-card border-primary/20 neon-border">
              <h2 className="text-2xl font-bold mb-4 text-primary font-['Orbitron']">
                Program Overview
              </h2>
              <p className="text-muted-foreground mb-4">
                Our Game Development program combines artistic creativity with technical expertise. 
                You'll learn industry-standard tools and techniques used by top game studios worldwide.
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
                  Game Designer
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                  Gameplay Programmer
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                  Technical Artist
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                  VR/AR Developer
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

export default GameDev;
