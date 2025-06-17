import { useState } from "react";
import { Button } from "@/components/ui/button";
import NewsletterModal from "@/components/newsletter-modal";

export default function CtaSection() {
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-dark-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">지금 바로 덤 체험 시작해보세요</h2>
        <p className="text-xl text-slate-400 mb-8">좋은 브랜드를 먼저 경험하는 건 오직 '덤'에서만!</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => setIsNewsletterModalOpen(true)}
            className="bg-accent-100 hover:bg-accent-200 text-dark-300 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            무료 체험 알림받기
          </Button>
          <Button 
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="border border-slate-600 hover:border-accent-100 text-slate-100 hover:text-accent-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 bg-transparent"
          >
            브랜드 파트너십 문의
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
