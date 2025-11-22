import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import aiImg from "@/assets/ai-bigdata.jpg";
import { CheckCircle2 } from "lucide-react";

const AIBigData = () => {
  const curriculum = [
    "Machine Learning Fundamentals",
    "Deep Learning and Neural Networks",
    "Natural Language Processing",
    "Computer Vision and Image Recognition",
    "Big Data Technologies (Hadoop, Spark)",
    "Data Mining and Analytics",
    "Statistical Analysis and Modeling",
    "Cloud Computing for Big Data",
    "AI Ethics and Responsible AI",
    "Predictive Analytics and Forecasting",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <img 
              src={aiImg} 
              alt="AI & Big Data" 
              className="w-full h-[400px] object-cover rounded-lg neon-border mb-8"
            />
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-text font-['Orbitron']">
              AI & Big Data
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              Dive into artificial intelligence and harness the power of massive datasets. Learn to 
              build intelligent systems that can learn, adapt, and make decisions from data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-card border-primary/20 neon-border">
              <h2 className="text-2xl font-bold mb-4 text-primary font-['Orbitron']">
                Program Overview
              </h2>
              <p className="text-muted-foreground mb-4">
                Our AI & Big Data program prepares you for the future of computing. Master machine 
                learning algorithms, data processing at scale, and AI systems that power the world's 
                most innovative companies.
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
                  Format: On-campus
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
                  Machine Learning Engineer
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                  Data Scientist
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                  AI Research Scientist
                </li>
                <li className="flex items-center text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                  Big Data Engineer
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

export default AIBigData;
