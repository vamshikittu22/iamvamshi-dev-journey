import { Trophy, Award, Target } from "lucide-react";

const AwardsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Top Performer",
      description: "Mphasis - 2022",
      category: "Professional Excellence"
    },
    {
      icon: Target,
      title: "Highest Bungee Jump in India",
      description: "Jumpin Heights - 2018",
      category: "Personal Achievement"
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="fade-in">
          <h2 className="section-title text-center mb-16">Awards & Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div 
                  key={achievement.title}
                  className="portfolio-card hover-glow hover-lift text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground mb-2">
                    {achievement.description}
                  </p>
                  
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {achievement.category}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;