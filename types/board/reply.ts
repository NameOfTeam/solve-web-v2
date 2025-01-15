import { User } from "../user/user";

export interface Reply {
  id: number;
  content: string;
  author: User;
  likeCount: number;
  isLiked: boolean;
  createdAt: string;
  updatedAt: string;
  replyId: number;
}