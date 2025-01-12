import { User } from "../user/user";

export interface Board {
  id: number;
  title: string;
  detail: string;
  language: string;
  author: User;
  createdAt: string;
  updatedAt: string;
  category: null | "FREE" | "ANOUNCE" | "QUESTION" | "SUGGESTION";
}
