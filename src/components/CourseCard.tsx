import { Link } from "react-router-dom";
import { Card } from "./ui/card";
import { ArrowRight } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  path: string;
}

const CourseCard = ({ title, description, image, path }: CourseCardProps) => {
  return (
    <Link to={path} className="group">
      <Card className="overflow-hidden bg-card border-primary/20 hover:border-primary transition-all duration-300 neon-border h-full">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-primary font-['Orbitron']">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
            <span className="text-sm font-semibold">Learn More</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CourseCard;
