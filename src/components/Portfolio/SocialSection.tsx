import { Instagram, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialSection = () => {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="fade-in text-center">
          <div className="portfolio-card hover-glow max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Camera className="h-8 w-8 text-primary mr-3" />
              <Instagram className="h-8 w-8 text-primary" />
            </div>
            
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Social Media Snapshot
            </h2>
            
            <p className="section-subtitle mb-8">
              Explorer behind the code and lens—follow my travel snapshots.
            </p>
            
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full hover-lift"
              asChild
            >
              <a 
                href="https://instagram.com/vamshi._.ki22u" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Follow @vamshi._.ki22u
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;