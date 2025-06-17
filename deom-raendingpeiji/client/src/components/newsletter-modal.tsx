import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Mail, X } from "lucide-react";
import type { InsertNewsletter } from "@shared/schema";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const subscribeNewsletter = useMutation({
    mutationFn: async (data: InsertNewsletter) => {
      const response = await apiRequest("POST", "/api/newsletter", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "구독 완료!",
        description: "새로운 브랜드 소식을 가장 먼저 알려드릴게요.",
      });
      setEmail("");
      onClose();
    },
    onError: (error: any) => {
      toast({
        title: "구독 신청에 실패했습니다",
        description: error.message || "다시 시도해주세요.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "올바른 이메일 주소를 입력해주세요",
        variant: "destructive",
      });
      return;
    }

    subscribeNewsletter.mutate({ email });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-dark-100 border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-white text-xl font-bold flex items-center gap-3">
            <div className="bg-accent-100/20 p-2 rounded-lg">
              <Mail className="text-accent-100 h-5 w-5" />
            </div>
            무료 체험 알림받기
          </DialogTitle>
          <DialogDescription className="text-slate-300">
            새로운 브랜드 체험 기회를 가장 먼저 알려드릴게요!
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label className="text-slate-300 text-sm font-medium">이메일 주소</Label>
              <Input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 bg-dark-200 border-slate-600 text-white focus:border-accent-100"
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button 
                type="submit" 
                disabled={subscribeNewsletter.isPending}
                className="flex-1 bg-accent-100 hover:bg-accent-200 text-dark-300 font-semibold"
              >
                {subscribeNewsletter.isPending ? "구독 중..." : "알림 신청하기"}
              </Button>
              <Button 
                type="button"
                variant="outline"
                onClick={onClose}
                className="border-slate-600 text-slate-300 hover:border-accent-100 hover:text-accent-100 bg-transparent"
              >
                취소
              </Button>
            </div>
          </form>
          
          <p className="text-xs text-slate-500 mt-4 text-center">
            언제든지 구독을 취소하실 수 있습니다.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}