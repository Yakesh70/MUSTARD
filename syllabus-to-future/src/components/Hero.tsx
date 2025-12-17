import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-8 animate-fade-in">
            <Badge variant="secondary" className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary border border-primary/20">
              Educational Technology Leader
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Transform Education with 
                <span className="text-primary"> Next-Gen Technology</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Integrate AI, Blockchain, and IoT seamlessly into your existing curriculum. 
                Prepare students for tomorrow's world with proven methodologies and measurable results.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg"
                onClick={() => navigate('/contact')}
              >
                <Play className="mr-2 h-5 w-5" />
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-2 border-primary/30 text-foreground hover:border-primary hover:text-primary hover:bg-primary/5"
                onClick={() => navigate('/about')}
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">50+ Partner Schools</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">10,000+ Students</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">95% Success Rate</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-slide-up">
            <img
              src={heroBackground}
              alt="Future of Education"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;