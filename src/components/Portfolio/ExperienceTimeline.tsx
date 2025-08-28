const ExperienceTimeline = () => {
  const experiences = [
    {
      company: "AI Labs Web LLC",
      period: "Aug 2024 – Present",
      role: "Full Stack Java Developer",
      achievements: [
        "Reduced compliance audit time by 40% via secure REST APIs",
        "Improved dashboard response times by 60% with React code-splitting & caching",
        "Cut deployment errors by 50% and downtime by 75% using Docker + Jenkins CI/CD",
        "Built AI fraud detection models with TensorFlow – 35% more accurate"
      ]
    },
    {
      company: "Mphasis",
      period: "Feb 2020 – Aug 2023",
      role: "Software Engineer",
      achievements: [
        "Built microservices with Spring Boot/Hibernate for banking systems",
        "Improved frontend load times by ~30% using React/Angular",
        "Automated data workflows with Python & SQL – saved 20–40% effort",
        "Reduced downtime by 75% via CI/CD on AWS/Azure",
        "Developed ML models for anomaly detection – 35–40% improved accuracy"
      ]
    },
    {
      company: "Cognizant (Intern)",
      period: "Aug 2019 – Feb 2020",
      role: "Software Development Intern",
      achievements: [
        "Built REST APIs with Spring Boot + Hibernate",
        "Enhanced UI responsiveness with React + Spring",
        "Implemented real-time messaging via WebSocket + Redis Pub/Sub"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-section-bg">
      <div className="max-w-4xl mx-auto">
        <div className="fade-in">
          <h2 className="section-title text-center mb-16">Experience Timeline</h2>
          
          <div className="relative">
            {experiences.map((exp, index) => (
              <div 
                key={exp.company} 
                className="timeline-item slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="portfolio-card hover-glow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-lg text-primary font-medium mb-2">
                        {exp.role}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li 
                        key={idx}
                        className="text-muted-foreground flex items-start"
                      >
                        <span className="text-primary mr-2 mt-1.5">•</span>
                        <span className="leading-relaxed">{achievement}</span>
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

export default ExperienceTimeline;