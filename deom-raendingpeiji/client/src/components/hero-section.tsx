import { useState } from "react";
import { Button } from "@/components/ui/button";
import NewsletterModal from "@/components/newsletter-modal";

export default function HeroSection() {
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Modern Korean lifestyle scene" 
          className="w-full h-full object-cover opacity-20" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-300/90 via-dark-200/95 to-dark-300/90"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-white">광고가 아니라,</span><br/>
          <span className="text-accent-100">경험으로 만나는 브랜드</span>
        </h1>
        <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto animate-slide-up">
          모든 브랜드 프로모션, 덤에서 프로모션 체험으로 시작하세요
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button 
            onClick={() => setIsNewsletterModalOpen(true)}
            className="bg-accent-100 hover:bg-accent-200 text-dark-300 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            지금 체험 시작하기
          </Button>
          <Button 
            variant="outline"
            onClick={() => scrollToSection('about')}
            className="border border-slate-600 hover:border-accent-100 text-slate-100 hover:text-accent-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 bg-transparent"
          >
            서비스 자세히 보기
          </Button>
        </div>
      </div>
      
      <NewsletterModal 
        isOpen={isNewsletterModalOpen} 
        onClose={() => setIsNewsletterModalOpen(false)} 
      />
    </section>
  );
}
