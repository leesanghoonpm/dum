import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema, insertNewsletterSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Submit brand partnership inquiry
  app.post("/api/inquiries", async (req, res) => {
    try {
      const inquiry = insertInquirySchema.parse(req.body);
      const createdInquiry = await storage.createInquiry(inquiry);
      res.json({ success: true, inquiry: createdInquiry });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "유효하지 않은 입력입니다.", 
          error: validationError.toString() 
        });
      } else {
        res.status(500).json({ message: "문의 등록 중 오류가 발생했습니다." });
      }
    }
  });

  // Subscribe to newsletter
  app.post("/api/newsletter", async (req, res) => {
    try {
      const subscriber = insertNewsletterSchema.parse(req.body);
      const createdSubscriber = await storage.createNewsletterSubscriber(subscriber);
      res.json({ success: true, subscriber: createdSubscriber });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "유효하지 않은 이메일입니다.", 
          error: validationError.toString() 
        });
      } else {
        res.status(500).json({ message: "뉴스레터 구독 중 오류가 발생했습니다." });
      }
    }
  });

  // Get all inquiries (for admin purposes)
  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ message: "문의 목록을 불러오는 중 오류가 발생했습니다." });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
