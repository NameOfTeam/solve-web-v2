import { Problem } from "../problem/problem";
import { User } from "../user/user";

export interface Workbook {
  id: number;
  title: string;
  description: string;
  problems: Problem[];
  author: User;
  bookmarkCount: number;
  likeCount: number;
  bookmarked: boolean;
  liked: boolean;
  progress: number;
  createdAt: string;
  updatedAt: string;
}