import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="fade-in animate">
          <h1 className="hero-title mb-8 leading-tight">
            Vamshi Krishna Pullaiahgari
          </h1>
          
          <p className="hero-subtitle max-w-3xl mx-auto mb-12">
            Crafting scalable, cloud-native solutions with Java, AI & DevOps
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg rounded-full shadow-hero hover-lift"
              asChild
            >
              <a href="mailto:vamshikrishna2297@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
            </Button>
            
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-2 hover-lift"
                asChild
              >
                <a
                  href="https://linkedin.com/in/vamshi-krishna-pullaiahgari"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-2 hover-lift"
                asChild
              >
                <a
                  href="https://github.com/vamshikrishna-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-primary rounded-full opacity-60"></div>
      </div>
    </section>
  );
};

export default HeroSection;