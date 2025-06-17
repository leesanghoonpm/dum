import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BrandShowcaseSection() {
  const brands = [
    {
      name: "글로우 스킨케어",
      description: "자연 성분 페이스 크림",
      price: "19,900원",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "퓨어 코스메틱",
      description: "미네랄 파운데이션 세트",
      price: "24,900원",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "솝카페",
      description: "감성 비누 브랜드",
      price: "9,900원",
      image: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      name: "네이처 웰니스",
      description: "프리미엄 바디케어 세트",
      price: "29,900원",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    }
  ];

  return (
    <section id="brands" className="py-20 bg-dark-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">지금 체험 가능한 브랜드</h2>
          <p className="text-xl text-slate-400">새로운 브랜드들이 여러분을 기다리고 있어요</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <Card 
              key={index}
              className="bg-dark-100 border-slate-700 overflow-hidden group hover:border-accent-100/50 transition-all duration-300"
            >
              <img 
                src={brand.image} 
                alt={brand.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{brand.name}</h3>
                <p className="text-sm text-slate-400 mb-3">{brand.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-accent-100 font-semibold">프로모션 체험가: {brand.price}</span>
                </div>
                <Button className="w-full bg-accent-100/10 hover:bg-accent-100 hover:text-dark-300 text-accent-100 border-0 transition-all duration-300">
                  체험하러 가기
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border border-accent-100 text-accent-100 hover:bg-accent-100 hover:text-dark-300 px-8 py-3 rounded-lg font-semibold transition-all duration-300 bg-transparent"
          >
            더 많은 브랜드 보기
          </Button>
        </div>
      </div>
    </section>
  );
}
