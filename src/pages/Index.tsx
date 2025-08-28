import { useEffect } from "react";
import HeroSection from "@/components/Portfolio/HeroSection";
import ProfessionalSummary from "@/components/Portfolio/ProfessionalSummary";
import TechnicalSkills from "@/components/Portfolio/TechnicalSkills";
import ExperienceTimeline from "@/components/Portfolio/ExperienceTimeline";
import ProjectsSection from "@/components/Portfolio/ProjectsSection";
import TravelSection from "@/components/Portfolio/TravelSection";
import SocialSection from "@/components/Portfolio/SocialSection";
import EducationSection from "@/components/Portfolio/EducationSection";
import AwardsSection from "@/components/Portfolio/AwardsSection";
import ContactFooter from "@/components/Portfolio/ContactFooter";
import ScrollAnimations from "@/components/Portfolio/ScrollAnimations";

const Index = () => {
  useEffect(() => {
    // Set document title for SEO
    document.title = "Vamshi Krishna Pullaiahgari - Full Stack Java Developer & Cloud Engineer";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Full Stack Java Developer with 4.5+ years of experience in cloud-native applications, AI-driven analytics, and DevOps. Expertise in Java, Spring Boot, React.js, AWS, and microservices architecture.');
    }
  }, []);

  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Professional Summary */}
      <ProfessionalSummary />
      
      {/* Technical Skills */}
      <TechnicalSkills />
      
      {/* Experience Timeline */}
      <ExperienceTimeline />
      
      {/* Projects */}
      <ProjectsSection />
      
      {/* Travel & Storytelling */}
      <TravelSection />
      
      {/* Social Media */}
      <SocialSection />
      
      {/* Education */}
      <EducationSection />
      
      {/* Awards & Highlights */}
      <AwardsSection />
      
      {/* Contact Footer */}
      <ContactFooter />
    </main>
  );
};

export default Index;
