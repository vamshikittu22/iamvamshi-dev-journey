import { GraduationCap, MapPin } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "M.Sc. in Information Technology",
      institution: "University of Central Missouri",
      location: "Missouri, USA",
      period: "2023-2025"
    },
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "JNTUH",
      location: "Hyderabad, India",
      period: "2015-2019"
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-section-bg">
      <div className="max-w-4xl mx-auto">
        <div className="fade-in">
          <h2 className="section-title text-center mb-16">Education</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div 
                key={edu.degree}
                className="portfolio-card hover-glow text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <GraduationCap className="h-12 w-12 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {edu.degree}
                </h3>
                
                <p className="text-lg text-primary font-medium mb-2">
                  {edu.institution}
                </p>
                
                <div className="flex items-center justify-center text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {edu.location}
                </div>
                
                <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;