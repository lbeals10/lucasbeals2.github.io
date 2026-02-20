import Header from "@/components/Header";
import Hero from "@/components/Hero";
import {
  AboutSection,
  ApproachSection,
  ExperienceSection,
  FractionalSection,
  ContactSection,
  Footer,
} from "@/components/Sections";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ApproachSection />
        <ExperienceSection />
        <FractionalSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
