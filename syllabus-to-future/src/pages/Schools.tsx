import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Calendar, Trophy, Users } from "lucide-react";
import school1 from "@/assets/school-1.jpg";

const Schools = () => {
  const schools = [
    { 
      name: "Chennai Public School", 
      location: "Chennai, Tamil Nadu", 
      students: "500+",
      since: "2023",
      programs: ["AI Fundamentals", "Robotics", "IoT"],
      achievements: "State Science Fair Winner"
    },
    { 
      name: "St. Mary's Higher Secondary", 
      location: "Coimbatore, Tamil Nadu", 
      students: "350+",
      since: "2023",
      programs: ["Blockchain Basics", "AI Ethics"],
      achievements: "Tech Innovation Award"
    },
    { 
      name: "Kendriya Vidyalaya", 
      location: "Madurai, Tamil Nadu", 
      students: "450+",
      since: "2023",
      programs: ["Machine Learning", "Data Science"],
      achievements: "National Coding Champion"
    },
    { 
      name: "DAV Public School", 
      location: "Salem, Tamil Nadu", 
      students: "300+",
      since: "2024",
      programs: ["IoT Projects", "AI Applications"],
      achievements: "Best Innovation Project"
    },
    { 
      name: "Vidya Mandir", 
      location: "Trichy, Tamil Nadu", 
      students: "275+",
      since: "2024",
      programs: ["Robotics Engineering", "AI in Math"],
      achievements: "Regional Robotics Champion"
    },
    { 
      name: "Sacred Heart Convent", 
      location: "Vellore, Tamil Nadu", 
      students: "320+",
      since: "2023",
      programs: ["AI Art", "Tech Ethics"],
      achievements: "Creative Tech Award"
    },
    { 
      name: "Modern Senior Secondary", 
      location: "Tirunelveli, Tamil Nadu", 
      students: "280+",
      since: "2024",
      programs: ["Blockchain Tech", "Smart Devices"],
      achievements: "Digital Innovation Prize"
    },
    { 
      name: "Bharathi Vidya Bhavan", 
      location: "Erode, Tamil Nadu", 
      students: "400+",
      since: "2023",
      programs: ["AI Programming", "IoT Systems"],
      achievements: "Excellence in STEM"
    },
    { 
      name: "PSBB Senior Secondary", 
      location: "Chennai, Tamil Nadu", 
      students: "600+",
      since: "2022",
      programs: ["Advanced AI", "Quantum Computing Intro"],
      achievements: "National Tech Leaders"
    },
    { 
      name: "Sishya School", 
      location: "Chennai, Tamil Nadu", 
      students: "380+",
      since: "2023",
      programs: ["AI in Biology", "Tech Entrepreneurship"],
      achievements: "Innovation Excellence"
    },
    { 
      name: "National Public School", 
      location: "Bangalore, Karnataka", 
      students: "520+",
      since: "2022",
      programs: ["Deep Learning", "AI Research"],
      achievements: "Research Excellence Award"
    },
    { 
      name: "Vidya Niketan", 
      location: "Puducherry", 
      students: "250+",
      since: "2024",
      programs: ["Smart Agriculture", "Green Tech"],
      achievements: "Sustainability Champion"
    },
    { 
      name: "Chinmaya Vidyalaya", 
      location: "Kochi, Kerala", 
      students: "390+",
      since: "2023",
      programs: ["AI in Healthcare", "Biotech Innovation"],
      achievements: "Healthcare Innovation Award"
    },
    { 
      name: "Ryan International", 
      location: "Hyderabad, Telangana", 
      students: "450+",
      since: "2023",
      programs: ["Cybersecurity", "Ethical Hacking Basics"],
      achievements: "Cybersecurity Excellence"
    },
    { 
      name: "Delhi Public School", 
      location: "Vijayawada, Andhra Pradesh", 
      students: "480+",
      since: "2022",
      programs: ["AI in Finance", "Fintech Innovation"],
      achievements: "Financial Literacy Champion"
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl mb-6">
            Schools We <span className="text-gradient">Serve</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Trusted by schools across Tamil Nadu and beyond. Join our growing community of forward-thinking educational institutions.
          </p>
          <div className="flex justify-center items-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-muted-foreground">Partner Schools</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">5,000+</div>
              <div className="text-muted-foreground">Students Reached</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">5</div>
              <div className="text-muted-foreground">States Covered</div>
            </div>
          </div>
        </div>

        {/* Featured School Spotlight */}
        <div className="mb-20">
          <h2 className="font-heading font-bold text-3xl mb-8 text-center">
            Featured School <span className="text-gradient">Spotlight</span>
          </h2>
          <Card className="hover-lift border-0 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto">
                <img src={school1} alt="Chennai Public School" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">Partner Since 2022</Badge>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <h3 className="font-heading font-bold text-2xl mb-4">Chennai Public School</h3>
                <p className="text-muted-foreground mb-6">
                  One of our pioneering partner schools, CPS has integrated MUSTARD's curriculum across 
                  all grades, resulting in a 40% increase in STEM interest and multiple national awards.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary mr-2" />
                    <span className="text-sm">500+ Students</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <span className="text-sm">Since 2022</span>
                  </div>
                  <div className="flex items-center">
                    <GraduationCap className="h-5 w-5 text-primary mr-2" />
                    <span className="text-sm">Grades 6-12</span>
                  </div>
                  <div className="flex items-center">
                    <Trophy className="h-5 w-5 text-primary mr-2" />
                    <span className="text-sm">5 Awards Won</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AI Fundamentals</Badge>
                  <Badge variant="secondary">Robotics</Badge>
                  <Badge variant="secondary">IoT Projects</Badge>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Schools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {schools.map((school, index) => (
            <Card key={index} className="hover-lift animate-fade-in border-0 shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <GraduationCap className="h-8 w-8 text-primary flex-shrink-0" />
                  <div className="text-right">
                    <div className="text-sm text-primary font-medium">{school.students}</div>
                    <div className="text-xs text-muted-foreground">Students</div>
                  </div>
                </div>
                
                <h3 className="font-heading font-semibold text-lg mb-3">{school.name}</h3>
                
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="text-sm">{school.location}</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 text-primary mr-2" />
                    <span className="text-muted-foreground">Partner since {school.since}</span>
                  </div>
                  
                  <div>
                    <div className="text-xs text-muted-foreground mb-2">Active Programs:</div>
                    <div className="flex flex-wrap gap-1">
                      {school.programs.map((program, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {program}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start pt-2">
                    <Trophy className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">{school.achievements}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 rounded-2xl p-12 text-center animate-slide-up border border-primary/20">
          <h2 className="font-heading font-semibold text-3xl mb-6 text-foreground">
            Is Your School Next?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of innovative schools that are preparing students for the future. 
            Let's bring cutting-edge technology education to your students.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 border-2 border-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-foreground">1</span>
              </div>
              <h4 className="font-medium mb-2 text-foreground">Schedule a Demo</h4>
              <p className="text-sm text-muted-foreground">See our teaching method in action</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 border-2 border-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-foreground">2</span>
              </div>
              <h4 className="font-medium mb-2 text-foreground">Pilot Program</h4>
              <p className="text-sm text-muted-foreground">Start with a small group of students</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 border-2 border-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-foreground">3</span>
              </div>
              <h4 className="font-medium mb-2 text-foreground">Full Implementation</h4>
              <p className="text-sm text-muted-foreground">Scale across all grades</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schools;