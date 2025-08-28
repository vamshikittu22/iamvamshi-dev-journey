import { Mail, Phone, Github, Linkedin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactFooter = () => {
  return (
    <footer className="py-20 px-6 lg:px-8 bg-section-bg">
      <div className="max-w-4xl mx-auto">
        <div className="fade-in text-center">
          <div className="portfolio-card hover-glow max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Let's Connect!
            </h2>
            
            <p className="section-subtitle mb-8">
              Ready to build something amazing together? Let's start the conversation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-3 rounded-full hover-lift"
                asChild
              >
                <a href="mailto:vamshikrishna2297@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  vamshikrishna2297@gmail.com
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-2 hover-lift"
                asChild
              >
                <a href="tel:+19133267373">
                  <Phone className="mr-2 h-4 w-4" />
                  +1 (913) 326-7373
                </a>
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <Button
                variant="ghost"
                size="lg"
                className="rounded-full hover-lift"
                asChild
              >
                <a
                  href="https://linkedin.com/in/vamshi-krishna-pullaiahgari"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
              
              <Button
                variant="ghost"
                size="lg"
                className="rounded-full hover-lift"
                asChild
              >
                <a
                  href="https://github.com/vamshikrishna-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6" />
                </a>
              </Button>
            </div>
            
            <div className="border-t border-border pt-6">
              <p className="text-sm text-muted-foreground flex items-center justify-center">
                Made with <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" /> by Vamshi Krishna
                <span className="mx-2">•</span>
                {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;