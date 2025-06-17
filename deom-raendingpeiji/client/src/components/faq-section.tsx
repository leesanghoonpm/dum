import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FaqSection() {
  const faqs = [
    {
      question: "덤은 어떤 플랫폼인가요?",
      answer: "브랜드 프로모션 상품을 프로모션 형식으로 제공하는 체험형 커머스 플랫폼입니다. 새로운 브랜드를 합리적인 가격으로 경험할 수 있도록 도와드립니다."
    },
    {
      question: "배송은 어떻게 되나요?",
      answer: "파트너 브랜드에서 직배송되며, 평균 1~3일 소요됩니다. 배송 관련 문의는 각 브랜드 고객센터로 연락해주세요."
    },
    {
      question: "프로모션 상품은 어떻게 받나요?",
      answer: "주문 시 배송지를 2곳까지 설정할 수 있습니다. 하나는 본인 주소, 하나는 친구나 가족 주소로 설정하여 함께 체험해보세요."
    },
    {
      question: "브랜드 파트너가 되고 싶어요",
      answer: "위의 브랜드 파트너십 문의 양식을 작성해주시거나, dumbteam2025@gmail.com로 연락해주세요. 신제품 출시나 브랜드 런칭 시 좋은 기회가 될 수 있습니다."
    }
  ];

  return (
    <section className="py-20 bg-dark-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">자주 묻는 질문</h2>
          <p className="text-xl text-slate-400">덤에 대해 궁금한 점들을 확인해보세요</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-dark-100 rounded-xl border border-slate-700 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-accent-100 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
