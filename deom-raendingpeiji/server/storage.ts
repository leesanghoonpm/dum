import { users, inquiries, newsletterSubscribers, type User, type InsertUser, type Inquiry, type InsertInquiry, type NewsletterSubscriber, type InsertNewsletter } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  createNewsletterSubscriber(subscriber: InsertNewsletter): Promise<NewsletterSubscriber>;
  getInquiries(): Promise<Inquiry[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private inquiries: Map<number, Inquiry>;
  private newsletterSubscribers: Map<number, NewsletterSubscriber>;
  private currentUserId: number;
  private currentInquiryId: number;
  private currentSubscriberId: number;

  constructor() {
    this.users = new Map();
    this.inquiries = new Map();
    this.newsletterSubscribers = new Map();
    this.currentUserId = 1;
    this.currentInquiryId = 1;
    this.currentSubscriberId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = this.currentInquiryId++;
    const inquiry: Inquiry = { 
      ...insertInquiry, 
      id, 
      createdAt: new Date()
    };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }

  async createNewsletterSubscriber(insertSubscriber: InsertNewsletter): Promise<NewsletterSubscriber> {
    const id = this.currentSubscriberId++;
    const subscriber: NewsletterSubscriber = { 
      ...insertSubscriber, 
      id, 
      createdAt: new Date()
    };
    this.newsletterSubscribers.set(id, subscriber);
    return subscriber;
  }

  async getInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
