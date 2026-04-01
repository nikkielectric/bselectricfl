import Header from "@/components/Header";
import CircuitBackground from "@/components/CircuitBackground";
import HeroSection from "@/components/HeroSection";
import ValueProps from "@/components/ValueProps";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";

import WhyChooseUs from "@/components/WhyChooseUs";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServiceArea from "@/components/ServiceArea";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <CircuitBackground />
    <div className="relative z-10">
      <Header />
      <HeroSection />
      <ValueProps />
      <ServicesSection />
      <AboutSection />
      
      <WhyChooseUs />
      <PricingSection />
      <TestimonialsSection />
      <ServiceArea />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  </>
);

export default Index;
