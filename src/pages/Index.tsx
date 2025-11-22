import Navbar from "@/components/Navbar";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import gameDevImg from "@/assets/game-dev.jpg";
import webDevImg from "@/assets/web-dev.jpg";
import aiImg from "@/assets/ai-bigdata.jpg";
import fullstackImg from "@/assets/fullstack.jpg";
import cyberImg from "@/assets/cybersecurity.jpg";

const Index = () => {
  const courses = [
    {
      title: "Game Development",
      description: "Master the art of creating immersive gaming experiences with cutting-edge technology",
      image: gameDevImg,
      path: "/courses/game-dev",
    },
    {
      title: "Web Development",
      description: "Build modern, responsive websites and web applications from scratch",
      image: webDevImg,
      path: "/courses/web",
    },
    {
      title: "AI & Big Data",
      description: "Dive into artificial intelligence and harness the power of massive datasets",
      image: aiImg,
      path: "/courses/ai-bigdata",
    },
    {
      title: "Full Stack Development",
      description: "Become a complete developer with frontend and backend expertise",
      image: fullstackImg,
      path: "/courses/fullstack",
    },
    {
      title: "Cybersecurity",
      description: "Protect digital assets and learn to defend against modern cyber threats",
      image: cyberImg,
      path: "/courses/cybersecurity",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-0" />
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text font-['Orbitron'] animate-fade-in">
            Welcome to TechU
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            The Future of IT Education Starts Here
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow text-lg px-8 py-6">
                Explore Courses
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text font-['Orbitron']">
            Our Programs
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Choose from our cutting-edge IT programs designed for the next generation of tech innovators
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.path} {...course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
