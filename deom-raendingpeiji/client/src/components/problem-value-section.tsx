import { Card, CardContent } from "@/components/ui/card";
import { X, Search, Ban, CheckCircle } from "lucide-react";

export default function ProblemValueSection() {
  return (
    <section id="about" className="py-20 bg-dark-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">왜 덤이 필요할까요?</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">브랜드 발견의 새로운 방식을 제안합니다</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="bg-dark-100 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-500/20 p-3 rounded-lg">
                    <X className="text-red-400 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">리뷰만 보고 고르는 건 지겹잖아요</h3>
                    <p className="text-slate-400">진짜 경험은 직접 써봐야 알 수 있어요</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark-100 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500/20 p-3 rounded-lg">
                    <Search className="text-yellow-400 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">정말 괜찮은 브랜드는 검색해도 안 나와요</h3>
                    <p className="text-slate-400">새로운 브랜드를 발견할 기회가 필요해요</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark-100 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <Ban className="text-purple-400 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">광고는 믿을 수 없고, 체험은 비싸요</h3>
                    <p className="text-slate-400">부담 없이 체험할 수 있는 방법이 필요해요</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-accent-100/10 to-accent-200/10 p-8 rounded-xl border border-accent-100/20">
            <h3 className="text-2xl font-bold text-accent-100 mb-4">그래서 우리는 '덤'을 만들었어요</h3>
            <p className="text-lg text-slate-300 mb-6">프로모션으로 체험하고, 직접 경험해보고, 내가 좋아하는 브랜드를 만드세요</p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-accent-100 h-5 w-5" />
                <span className="text-slate-300">합리적인 가격으로 새로운 브랜드 체험</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-accent-100 h-5 w-5" />
                <span className="text-slate-300">친구와 함께 나눠 쓸 수 있는 프로모션 구성</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-accent-100 h-5 w-5" />
                <span className="text-slate-300">진짜 후기로 브랜드와 소통</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
