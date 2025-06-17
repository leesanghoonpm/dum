import { Card, CardContent } from "@/components/ui/card";
import { Search, Gift, Heart } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: "브랜드 선택",
      description: "신규 브랜드의 프로모션 상품을 선택하세요. 다양한 카테고리에서 나에게 맞는 브랜드를 찾아보세요."
    },
    {
      number: 2,
      icon: Gift,
      title: "프로모션 체험",
      description: "브랜드 제품을 프로모션 가격으로 받아보세요. 고품질 브랜드를 가성비있게 경험할 수 있어요."
    },
    {
      number: 3,
      icon: Heart,
      title: "후기 공유",
      description: "직접 써보고 진짜 후기로 공유하면 추가 혜택을 받을 수 있어요. 브랜드와 직접 소통해보세요."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-dark-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">덤 이용 방법</h2>
          <p className="text-xl text-slate-400">간단한 3단계로 새로운 브랜드를 경험하세요</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <Card 
                key={step.number}
                className="relative bg-dark-100 border-slate-700 text-center group hover:border-accent-100/50 transition-all duration-300"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-100 text-dark-300 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {step.number}
                </div>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <IconComponent className="text-accent-100 h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
