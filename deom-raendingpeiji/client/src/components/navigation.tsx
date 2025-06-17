import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-dark-200/95 backdrop-blur-sm border-b border-dark-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-accent-100">덤</div>
            <span className="ml-2 text-sm text-slate-400">DUM</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-300 hover:text-accent-100 transition-colors"
            >
              서비스 소개
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-slate-300 hover:text-accent-100 transition-colors"
            >
              이용방법
            </button>
            <button 
              onClick={() => scrollToSection('brands')}
              className="text-slate-300 hover:text-accent-100 transition-colors"
            >
              브랜드
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-slate-300 hover:text-accent-100 transition-colors"
            >
              후기
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-accent-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-dark-100">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-300 hover:text-accent-100 transition-colors text-left"
              >
                서비스 소개
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-slate-300 hover:text-accent-100 transition-colors text-left"
              >
                이용방법
              </button>
              <button 
                onClick={() => scrollToSection('brands')}
                className="text-slate-300 hover:text-accent-100 transition-colors text-left"
              >
                브랜드
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-slate-300 hover:text-accent-100 transition-colors text-left"
              >
                후기
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
