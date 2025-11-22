import Navbar from "@/components/Navbar";
import CourseCard from "@/components/CourseCard";
import gameDevImg from "@/assets/game-dev.jpg";
import webDevImg from "@/assets/web-dev.jpg";
import aiImg from "@/assets/ai-bigdata.jpg";
import fullstackImg from "@/assets/fullstack.jpg";
import cyberImg from "@/assets/cybersecurity.jpg";

const Courses = () => {
  const courses = [
    {
      title: "Game Development",
      description: "Master the art of creating immersive gaming experiences with cutting-edge technology. Learn game engines, 3D modeling, physics, and storytelling.",
      image: gameDevImg,
      path: "/courses/game-dev",
    },
    {
      title: "Web Development",
      description: "Build modern, responsive websites and web applications from scratch. Master HTML, CSS, JavaScript, and modern frameworks.",
      image: webDevImg,
      path: "/courses/web",
    },
    {
      title: "AI & Big Data",
      description: "Dive into artificial intelligence and harness the power of massive datasets. Learn machine learning, deep learning, and data analytics.",
      image: aiImg,
      path: "/courses/ai-bigdata",
    },
    {
      title: "Full Stack Development",
      description: "Become a complete developer with frontend and backend expertise. Master databases, APIs, cloud computing, and DevOps.",
      image: fullstackImg,
      path: "/courses/fullstack",
    },
    {
      title: "Cybersecurity",
      description: "Protect digital assets and learn to defend against modern cyber threats. Master encryption, network security, and ethical hacking.",
      image: cyberImg,
      path: "/courses/cybersecurity",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 neon-text font-['Orbitron']">
          Our Courses
        </h1>
        
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          Explore our comprehensive range of IT programs designed to equip you with the skills 
          needed to excel in today's technology-driven world. Each course combines theoretical 
          knowledge with practical, hands-on experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.path} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
