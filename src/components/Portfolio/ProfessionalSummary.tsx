const ProfessionalSummary = () => {
  return (
    <section className="py-20 px-6 lg:px-8 bg-section-bg">
      <div className="max-w-4xl mx-auto">
        <div className="fade-in">
          <h2 className="section-title text-center mb-8">Professional Summary</h2>
          
          <div className="portfolio-card hover-glow">
            <p className="text-lg leading-relaxed text-center text-muted-foreground max-w-3xl mx-auto">
              Full Stack Java Developer with <strong className="text-foreground">4.5+ years of experience</strong> building 
              cloud-native applications with Java, Spring Boot, React.js, AI-driven analytics, and DevOps. 
              Passionate about <strong className="text-foreground">performance optimization</strong>, 
              <strong className="text-foreground"> latency reduction</strong>, and 
              <strong className="text-foreground"> real-time insights</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;