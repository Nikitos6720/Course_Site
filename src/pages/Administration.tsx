import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Administration = () => {
  const administrators = [
    {
      name: "Dr. Sarah Chen",
      position: "University President",
      email: "s.chen@techu.edu",
      phone: "+1 (555) 100-0001",
    },
    {
      name: "Prof. Marcus Williams",
      position: "Dean of Computer Science",
      email: "m.williams@techu.edu",
      phone: "+1 (555) 100-0002",
    },
    {
      name: "Dr. Elena Rodriguez",
      position: "Head of Game Development",
      email: "e.rodriguez@techu.edu",
      phone: "+1 (555) 100-0003",
    },
    {
      name: "Dr. James Patterson",
      position: "Head of Cybersecurity",
      email: "j.patterson@techu.edu",
      phone: "+1 (555) 100-0004",
    },
    {
      name: "Prof. Aisha Patel",
      position: "Head of AI & Big Data",
      email: "a.patel@techu.edu",
      phone: "+1 (555) 100-0005",
    },
    {
      name: "Dr. Thomas Anderson",
      position: "Head of Full Stack Development",
      email: "t.anderson@techu.edu",
      phone: "+1 (555) 100-0006",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 neon-text font-['Orbitron']">
          Administration
        </h1>
        
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          Meet our leadership team dedicated to providing world-class IT education and 
          fostering innovation in technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {administrators.map((admin, index) => (
            <Card key={index} className="p-6 bg-card border-primary/20 neon-border">
              <h3 className="text-xl font-bold mb-2 text-primary font-['Orbitron']">
                {admin.name}
              </h3>
              <p className="text-muted-foreground mb-4">{admin.position}</p>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 mr-2 text-primary" />
                  <a href={`mailto:${admin.email}`} className="hover:text-primary transition-colors">
                    {admin.email}
                  </a>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2 text-primary" />
                  <a href={`tel:${admin.phone}`} className="hover:text-primary transition-colors">
                    {admin.phone}
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-card border-primary/20 neon-border max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center neon-text font-['Orbitron']">
            Contact Us
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 mr-3 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Campus Address</h3>
                <p className="text-muted-foreground">
                  123 Tech Avenue<br />
                  Silicon Valley, CA 94025<br />
                  United States
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-6 w-6 mr-3 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Main Office</h3>
                <p className="text-muted-foreground">+1 (555) 100-0000</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-6 w-6 mr-3 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">General Inquiries</h3>
                <p className="text-muted-foreground">info@techu.edu</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Administration;
