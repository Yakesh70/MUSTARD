import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, Play } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Principal, Chennai Public School",
      type: "video",
      content: "MUSTARD has transformed how our students approach technology. The way they connect textbook concepts to AI and robotics is remarkable.",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1494790108755-2616c359f131?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Rajesh Kumar",
      role: "Correspondent, St. Mary's Higher Secondary",
      type: "text",
      content: "Our students are now asking deeper questions about mathematics and science. They see the real-world applications of what they're learning.",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Anitha Krishnan",
      role: "Computer Science Teacher, DAV Public School",
      type: "video",
      content: "The gamified approach makes even the most complex concepts accessible. Students who used to struggle with math now excel in understanding AI.",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Arjun Patel",
      role: "Class 10 Student, Kendriya Vidyalaya",
      type: "text",
      content: "I never thought my math homework could help me understand how Netflix recommendations work! MUSTARD made it all click.",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Mrs. Lakshmi Menon",
      role: "Parent & School Board Member",
      type: "video",
      content: "My daughter comes home excited about her lessons. She's building robots and explaining blockchain to me. It's incredible!",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Vikram Singh",
      role: "Mathematics Teacher, Sacred Heart Convent",
      type: "text",
      content: "MUSTARD bridges the gap between abstract mathematical concepts and their real-world applications. Students finally see why algebra matters.",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const videoTestimonials = testimonials.filter(t => t.type === 'video');
  const textTestimonials = testimonials.filter(t => t.type === 'text');

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl mb-6">
            What People Are <span className="text-gradient">Saying</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear directly from principals, teachers, students, and parents about the transformative impact of MUSTARD.
          </p>
        </div>

        {/* Video Testimonials */}
        <div className="mb-16">
          <h2 className="font-heading font-semibold text-3xl mb-8 text-center">Video Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="hover-lift cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop"
                      alt="Video testimonial"
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors rounded-t-lg flex items-center justify-center">
                      <Play className="h-12 w-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.thumbnail} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="font-medium">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Text Testimonials */}
        <div className="mb-16">
          <h2 className="font-heading font-semibold text-3xl mb-8 text-center">Written Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {textTestimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  
                  <p className="text-lg text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={testimonial.thumbnail} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="font-medium">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-primary fill-current" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-12 text-center animate-fade-in">
          <h2 className="font-heading font-semibold text-3xl mb-6">
            Your School Can Be Next!
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the growing community of schools that are revolutionizing education with MUSTARD. 
            Let's create success stories together.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="bg-background/50 rounded-lg p-6">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Principal Satisfaction</div>
            </div>
            <div className="bg-background/50 rounded-lg p-6">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Student Engagement</div>
            </div>
            <div className="bg-background/50 rounded-lg p-6">
              <div className="text-3xl font-bold text-primary mb-2">90%</div>
              <div className="text-sm text-muted-foreground">Improved Understanding</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;