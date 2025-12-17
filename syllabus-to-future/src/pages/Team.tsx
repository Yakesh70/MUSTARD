import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Arjun Krishnamurthy",
      role: "Founder & Chief Learning Officer",
      bio: "PhD in Computer Science, former Google AI researcher. Passionate about making complex technology accessible to young minds.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      email: "arjun@mustard.edu"
    },
    {
      name: "Priya Nair",
      role: "Head of Curriculum Design",
      bio: "Master's in Education, 15+ years experience in curriculum development. Expert in connecting traditional subjects with modern tech.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c359f131?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      email: "priya@mustard.edu"
    },
    {
      name: "Rajesh Patel",
      role: "AI & Robotics Lead",
      bio: "MIT graduate, former Tesla engineer. Specializes in making AI and robotics concepts understandable through hands-on activities.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      email: "rajesh@mustard.edu"
    },
    {
      name: "Sneha Sharma",
      role: "Gamification Expert",
      bio: "Game design background with focus on educational games. Creates engaging experiences that make learning addictive.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      email: "sneha@mustard.edu"
    },
    {
      name: "Dr. Vikram Singh",
      role: "Mathematics Pedagogy Specialist",
      bio: "PhD in Mathematics Education. Expert in connecting abstract math concepts to real-world applications in AI and data science.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      email: "vikram@mustard.edu"
    },
    {
      name: "Anitha Reddy",
      role: "Blockchain & IoT Educator",
      bio: "Blockchain developer turned educator. Passionate about teaching cryptography and IoT through simple, relatable examples.",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      email: "anitha@mustard.edu"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl mb-6">
            Meet Our <span className="text-gradient">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate educators and technology experts working together to revolutionize how students learn future technologies.
          </p>
        </div>

        {/* Team Photo */}
        <div className="mb-16 animate-slide-up">
          <img 
            src={teamPhoto} 
            alt="MUSTARD team in modern educational setting"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-12 mb-16 text-center animate-fade-in">
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are a diverse team of educators, technologists, and innovators united by a single vision: 
            to make advanced technology education accessible, engaging, and rooted in fundamental concepts that students already know. 
            <span className="text-primary font-medium"> Real teachers. Real classrooms. Real impact.</span>
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <a 
                      href={member.linkedin}
                      className="bg-background/90 hover:bg-primary hover:text-primary-foreground p-2 rounded-full transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="bg-background/90 hover:bg-primary hover:text-primary-foreground p-2 rounded-full transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="hover-lift">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly innovate our teaching methods to make complex technology concepts simple and engaging.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">Collaboration</h3>
              <p className="text-muted-foreground">
                We work closely with schools, teachers, and students to create the best possible learning experience.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do, from curriculum design to student outcomes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Team;