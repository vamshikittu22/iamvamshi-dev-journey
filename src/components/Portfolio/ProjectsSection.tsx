import { ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Movie Booking System",
      description: "Real-time seat selection system with age-based pricing and intuitive booking flow",
      technologies: ["PHP", "JavaScript", "MySQL", "HTML/CSS"],
      features: ["Real-time seat selection", "Age-based pricing", "Payment integration"]
    },
    {
      title: "Event Management System",
      description: "Comprehensive event planning platform with attendee management and scheduling",
      technologies: [".NET Core MVC", "C#", "Razor UI", "SQL Server"],
      features: ["Event scheduling", "Attendee management", "Resource allocation"]
    },
    {
      title: "Travel Planning App",
      description: "Curated travel packages platform with booking management and itinerary planning",
      technologies: ["React.js", "PHP", "MySQL", "REST API"],
      features: ["Package curation", "Booking flows", "Itinerary planning"]
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="fade-in">
          <h2 className="section-title text-center mb-16">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="portfolio-card hover-glow hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Code className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2 mt-0.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;