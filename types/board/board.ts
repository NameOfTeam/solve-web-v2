import { Problem } from "../problem/problem";
import { User } from "../user/user";

export interface Board {
  id: number;
  title: string;
  content: string;
  language: string;
  author: User;
  createdAt: string;
  updatedAt: string;
  category: "FREE" | "NOTICE" | "QUESTION" | "SUGGESTION" | "INFORMATION";
  problem: Problem;
  isLiked: boolean,
  likeCount: number;
}
