import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, X, Calendar, MapPin } from "lucide-react";
import classroom1 from "@/assets/classroom-1.jpg";
import classroom2 from "@/assets/classroom-2.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import studentSuccess from "@/assets/student-success.jpg";
import mathToAi from "@/assets/math-to-ai.jpg";

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  const galleryItems = [
    {
      type: "image",
      src: classroom1,
      title: "Interactive STEM Learning",
      description: "Students engaging with AI and robotics concepts in our modern classrooms",
      category: "Classroom",
      location: "Chennai Public School",
      date: "March 2024"
    },
    {
      type: "image", 
      src: mathToAi,
      title: "From Math to Machine Learning",
      description: "Demonstrating how algebra concepts evolve into AI algorithms",
      category: "Teaching Method",
      location: "Kendriya Vidyalaya",
      date: "February 2024"
    },
    {
      type: "image",
      src: gallery1,
      title: "Science Lab Innovation",
      description: "Students conducting experiments with modern technology integration",
      category: "Laboratory",
      location: "St. Mary's Higher Secondary",
      date: "January 2024"
    },
    {
      type: "image",
      src: gallery2,
      title: "Robotics Competition",
      description: "Annual inter-school robotics championship powered by MUSTARD curriculum",
      category: "Competition",
      location: "Regional Event",
      date: "December 2023"
    },
    {
      type: "image",
      src: gallery3,
      title: "Teacher Training Workshop",
      description: "Empowering educators with cutting-edge technology integration skills",
      category: "Training",
      location: "ADRIG AI Center",
      date: "November 2023"
    },
    {
      type: "image",
      src: studentSuccess,
      title: "Student Achievements",
      description: "Celebrating success stories and academic achievements in technology",
      category: "Awards",
      location: "Multiple Schools",
      date: "October 2023"
    },
    {
      type: "image",
      src: classroom2,
      title: "Collaborative Learning",
      description: "Team-based projects combining creativity with technology",
      category: "Projects",
      location: "DAV Public School",
      date: "September 2023"
    }
  ];

  const categories = ["All", "Classroom", "Teaching Method", "Laboratory", "Competition", "Training", "Awards", "Projects"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl mb-6">
            Experience MUSTARD <span className="text-gradient">In Action</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            See how we're transforming education through real classrooms, real students, and real results. 
            Every image tells a story of innovation and learning.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-foreground text-background'
                  : 'bg-secondary hover:bg-secondary/80 text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer overflow-hidden hover-lift border-0 shadow-lg"
              onClick={() => setSelectedMedia(item)}
            >
              <div className="relative">
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {item.category}
                  </Badge>
                </div>
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <Play className="h-8 w-8 text-primary-foreground ml-1" />
                    </div>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm opacity-90 line-clamp-2">{item.description}</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {item.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {item.date}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 rounded-2xl p-12 text-center border border-primary/20">
          <h2 className="font-heading font-bold text-3xl mb-8 text-foreground">
            Capturing <span className="text-gradient">Real Impact</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">500+</div>
              <div className="text-muted-foreground text-sm">Photos Captured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">50+</div>
              <div className="text-muted-foreground text-sm">Video Sessions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">15+</div>
              <div className="text-muted-foreground text-sm">School Events</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">100%</div>
              <div className="text-muted-foreground text-sm">Authentic Moments</div>
            </div>
          </div>
        </div>

        {/* Modal for enlarged view */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden">
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70"
              >
                <X className="h-4 w-4" />
              </button>
              <img
                src={selectedMedia.src}
                alt={selectedMedia.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-primary text-primary-foreground">
                    {selectedMedia.category}
                  </Badge>
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">{selectedMedia.title}</h3>
                <p className="text-muted-foreground mb-4">{selectedMedia.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {selectedMedia.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {selectedMedia.date}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;