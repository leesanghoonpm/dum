import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      username: "@cos_sso",
      product: "솝카페 비누 사용",
      comment: "처음엔 의심했는데, 써보고 나니 정착했어요! 향도 좋고 피부에도 순해서 친구들한테도 추천했어요.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      username: "@beauty_kim",
      product: "글로우 스킨케어 사용",
      comment: "1+1이라고 해서 품질이 떨어질 줄 알았는데 완전 반전! 피부가 정말 좋아졌어요. 친구도 만족해해요.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      username: "@wellness_life",
      product: "네이처 웰니스 사용",
      comment: "새로운 브랜드를 발견할 수 있어서 좋아요. 덤 덕분에 내 취향을 찾았어요. 정기적으로 체크해보고 있어요!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80"
    }
  ];

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className="text-accent-100 h-4 w-4 fill-current" />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-dark-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">덤으로 경험한 진짜 리뷰</h2>
          <p className="text-xl text-slate-400">실제 사용자들의 솔직한 후기를 확인하세요</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-dark-100 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt="User profile" 
                    className="w-12 h-12 rounded-full object-cover" 
                  />
                  <div className="ml-3">
                    <div className="text-white font-semibold">{testimonial.username}</div>
                    <div className="text-slate-400 text-sm">{testimonial.product}</div>
                  </div>
                </div>
                <p className="text-slate-300 mb-4">"{testimonial.comment}"</p>
                <div className="flex">
                  {renderStars()}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
