import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { InsertInquiry } from "@shared/schema";

export default function ContactFormSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<InsertInquiry>({
    brandName: "",
    contactName: "",
    email: "",
    phone: "",
    category: "",
    message: ""
  });

  const submitInquiry = useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const response = await apiRequest("POST", "/api/inquiries", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "문의가 성공적으로 전송되었습니다",
        description: "빠른 시일 내에 연락드리겠습니다.",
      });
      setFormData({
        brandName: "",
        contactName: "",
        email: "",
        phone: "",
        category: "",
        message: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "문의 전송에 실패했습니다",
        description: error.message || "다시 시도해주세요.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.brandName || !formData.contactName || !formData.email || !formData.phone || !formData.category || !formData.message) {
      toast({
        title: "모든 필수 항목을 입력해주세요",
        variant: "destructive",
      });
      return;
    }

    submitInquiry.mutate(formData);
  };

  const handleInputChange = (field: keyof InsertInquiry, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-dark-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">브랜드 파트너십 문의</h2>
          <p className="text-xl text-slate-400">새로운 브랜드와 함께 성장하고 싶습니다</p>
        </div>

        <Card className="bg-dark-100 border-slate-700">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label className="block text-sm font-medium text-slate-300 mb-2">브랜드명</Label>
                  <Input 
                    type="text"
                    value={formData.brandName}
                    onChange={(e) => handleInputChange('brandName', e.target.value)}
                    className="w-full bg-dark-200 border-slate-600 text-white focus:border-accent-100"
                    placeholder="브랜드명을 입력하세요"
                    required
                  />
                </div>
                <div>
                  <Label className="block text-sm font-medium text-slate-300 mb-2">담당자명</Label>
                  <Input 
                    type="text"
                    value={formData.contactName}
                    onChange={(e) => handleInputChange('contactName', e.target.value)}
                    className="w-full bg-dark-200 border-slate-600 text-white focus:border-accent-100"
                    placeholder="담당자명을 입력하세요"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label className="block text-sm font-medium text-slate-300 mb-2">이메일</Label>
                  <Input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full bg-dark-200 border-slate-600 text-white focus:border-accent-100"
                    placeholder="이메일을 입력하세요"
                    required
                  />
                </div>
                <div>
                  <Label className="block text-sm font-medium text-slate-300 mb-2">연락처</Label>
                  <Input 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full bg-dark-200 border-slate-600 text-white focus:border-accent-100"
                    placeholder="연락처를 입력하세요"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label className="block text-sm font-medium text-slate-300 mb-2">제품 카테고리</Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger className="w-full bg-dark-200 border-slate-600 text-white focus:border-accent-100">
                    <SelectValue placeholder="카테고리를 선택하세요" />
                  </SelectTrigger>
                  <SelectContent className="bg-dark-200 border-slate-600">
                    <SelectItem value="뷰티/스킨케어">뷰티/스킨케어</SelectItem>
                    <SelectItem value="패션/액세서리">패션/액세서리</SelectItem>
                    <SelectItem value="라이프스타일">라이프스타일</SelectItem>
                    <SelectItem value="헬스/웰니스">헬스/웰니스</SelectItem>
                    <SelectItem value="기타">기타</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="block text-sm font-medium text-slate-300 mb-2">문의 내용</Label>
                <Textarea 
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={4}
                  className="w-full bg-dark-200 border-slate-600 text-white focus:border-accent-100"
                  placeholder="브랜드 소개 및 협업 희망 사항을 자세히 적어주세요"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={submitInquiry.isPending}
                className="w-full bg-accent-100 hover:bg-accent-200 text-dark-300 py-3 rounded-lg font-semibold transition-colors"
              >
                {submitInquiry.isPending ? "전송 중..." : "문의하기"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
