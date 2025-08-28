const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: "Languages & Scripting",
      skills: ["Java", "C#", "Python", "PHP", "Go", "TypeScript", "JavaScript", "SQL"]
    },
    {
      title: "Frontend & UI",
      skills: ["React.js", "Angular", "Node.js", "HTML5/CSS3", "jQuery"]
    },
    {
      title: "Backend & APIs",
      skills: ["Spring Boot/MVC/Security", "ASP.NET Core", "Django", "REST", "GraphQL", "Hibernate"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (ECS, EC2, Lambda, RDS, S3)", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus", "Grafana"]
    },
    {
      title: "Tools & Testing",
      skills: ["Git", "GitHub", "BitBucket", "Azure DevOps", "Maven", "Gradle", "IntelliJ IDEA", "VS Code", "Postman", "JUnit", "Mockito"]
    },
    {
      title: "Methodologies",
      skills: ["Agile (Scrum/Kanban)", "SDLC", "Microservices", "MVC"]
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="fade-in">
          <h2 className="section-title text-center mb-16">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title} 
                className="portfolio-card hover-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="skill-badge"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;