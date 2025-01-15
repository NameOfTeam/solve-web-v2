import { User } from "../user/user";

export interface Comment {
  id: number;
  content: string;
  author: User;
  likeCount: number;
  isLiked: boolean;
  replyCount: number;
  createdAt: string;
  updatedAt: string;
}
