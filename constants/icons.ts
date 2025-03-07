import { IconType } from "@/components/ui/ThemedIcon";
import Flag from "@/assets/flag.svg";
import Workbook from "@/assets/workbook.svg";
import Shop from "@/assets/shop.svg";
import Daily from "@/assets/daily.svg";
import Problem from "@/assets/problem.svg";
import Bookmark from "@/assets/bookmark.svg";
import Like from "@/assets/like.svg";
import Logo from "@/assets/logo.svg";
import Google from "@/assets/google.svg";
import Facebook from "@/assets/facebook.svg";
import Github from "@/assets/github.svg";
import Naver from "@/assets/naver.svg";
import Kakao from "@/assets/kakao.svg";
import Search from "@/assets/search.svg";
import Dropdown from "@/assets/drop_down.svg";
import Boards from "@/assets/boards.svg";
import ArrowLeft from "@/assets/arrow-left.svg";
import Pen from "@/assets/pen.svg";
import ChatBubble from "@/assets/chat_bubble.svg";
import Close from "@/assets/close.svg";
import Add from "@/assets/add.svg";

export const ICONS = {
  flag: Flag,
  workbook: Workbook,
  shop: Shop,
  daily: Daily,
  problem: Problem,
  bookmark: Bookmark,
  "drop-down": Dropdown,
  search: Search,
  like: Like,
  logo: Logo,
  google: Google,
  facebook: Facebook,
  github: Github,
  naver: Naver,
  kakao: Kakao,
  boards: Boards,
  "arrow-left-back": ArrowLeft,
  pen: Pen,
  "chat-bubble": ChatBubble,
  close: Close,
  add: Add,
} satisfies Record<string, IconType>;

export type IconName = keyof typeof ICONS;
