import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const TravelSection = () => {
  const blogPosts = [
    {
      title: "Coorg – A 3-Year-Old Dream",
      excerpt: "Finally made it to the Scotland of India. Coffee plantations, misty hills, and memories that will last forever.",
      date: "2023",
      location: "Coorg, Karnataka",
      link: "#"
    },
    {
      title: "Highest Bungee Jump in India",
      excerpt: "Conquering fears at Jumpin Heights - an adrenaline rush like no other.",
      date: "2018",
      location: "Rishikesh",
      link: "#"
    },
    {
      title: "Wanderlust Chronicles",
      excerpt: "Exploring hidden gems across India - from bustling cities to serene landscapes.",
      date: "Ongoing",
      location: "Various",
      link: "#"
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-section-bg">
      <div className="max-w-6xl mx-auto">
        <div className="fade-in">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Journey & Perspectives</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              A DIY family traveler and storyteller—discover the places that shaped my journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.title}
                className="portfolio-card hover-glow hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  {post.location}
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-primary hover:text-primary-hover p-0 h-auto"
                  asChild
                >
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    Read More →
                  </a>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelSection;