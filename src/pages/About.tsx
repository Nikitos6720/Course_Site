import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Users, Award, BookOpen, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Expert Faculty",
      description: "Learn from industry professionals with years of real-world experience",
    },
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: "Industry Recognition",
      description: "Our programs are recognized by leading tech companies worldwide",
    },
    {
      icon: <BookOpen className="h-12 w-12 text-primary" />,
      title: "Cutting-Edge Curriculum",
      description: "Stay ahead with courses updated to match the latest industry trends",
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Hands-On Learning",
      description: "Apply your knowledge through real projects and practical assignments",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 neon-text font-['Orbitron']">
          About TechU
        </h1>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground text-center mb-6">
            TechU is a premier IT university dedicated to shaping the future of technology education. 
            Founded on the principles of innovation, excellence, and practical learning, we provide 
            students with the skills and knowledge needed to thrive in the digital age.
          </p>
          <p className="text-lg text-muted-foreground text-center">
            Our state-of-the-art facilities, combined with a curriculum designed by industry experts, 
            ensure that our graduates are ready to tackle the challenges of tomorrow's tech landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 bg-card border-primary/20 neon-border">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-primary font-['Orbitron']">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-12 bg-card border-primary/20 neon-border max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center neon-text font-['Orbitron']">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-4">
            To empower the next generation of technology leaders through world-class education, 
            innovative research, and industry collaboration.
          </p>
          <p className="text-lg text-muted-foreground text-center">
            We believe in creating an environment where creativity meets technical excellence, 
            preparing our students not just for their first job, but for a lifetime of success 
            in the ever-evolving tech industry.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default About;
