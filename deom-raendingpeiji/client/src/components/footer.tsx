import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-300 border-t border-slate-700 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold text-accent-100">덤</div>
              <span className="ml-2 text-sm text-slate-400">DUM</span>
            </div>
            <p className="text-slate-400 mb-4">광고가 아니라, 경험으로 만나는 브랜드</p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-accent-100 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-accent-100 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-accent-100 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">서비스</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-accent-100 transition-colors">브랜드 체험</a></li>
              <li><a href="#" className="hover:text-accent-100 transition-colors">파트너십</a></li>
              <li><a href="#" className="hover:text-accent-100 transition-colors">고객지원</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">회사</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-accent-100 transition-colors">회사소개</a></li>
              <li><a href="#" className="hover:text-accent-100 transition-colors">채용정보</a></li>
              <li><a href="#" className="hover:text-accent-100 transition-colors">언론보도</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-slate-400">
            © 2025 DUM Inc. | 사업자등록번호 000-00-00000 | 통신판매업신고 제2025-서울강남-00000호
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-slate-400 hover:text-accent-100 transition-colors">개인정보처리방침</a>
            <a href="#" className="text-sm text-slate-400 hover:text-accent-100 transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
