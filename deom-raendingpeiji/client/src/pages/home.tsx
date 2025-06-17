import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemValueSection from "@/components/problem-value-section";
import HowItWorksSection from "@/components/how-it-works-section";
import BrandShowcaseSection from "@/components/brand-showcase-section";
import TestimonialsSection from "@/components/testimonials-section";
import CtaSection from "@/components/cta-section";
import ContactFormSection from "@/components/contact-form-section";
import FaqSection from "@/components/faq-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-dark-300 text-slate-100">
      <Navigation />
      <HeroSection />
      <ProblemValueSection />
      <HowItWorksSection />
      <BrandShowcaseSection />
      <TestimonialsSection />
      <CtaSection />
      <ContactFormSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
