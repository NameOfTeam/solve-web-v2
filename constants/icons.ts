import Flag from "@/assets/flag.svg";
import Workbook from "@/assets/workbook.svg";
import Shop from "@/assets/shop.svg";
import Daily from "@/assets/daily.svg";
import Problem from "@/assets/problem.svg";
import Bookmark from "@/assets/bookmark.svg";
import Like from "@/assets/like.svg";
import Logo from "@/assets/logo.svg";
import { IconType } from "@/components/ThemedIcon";

export const ICONS = {
  flag: Flag,
  workbook: Workbook,
  shop: Shop,
  daily: Daily,
  problem: Problem,
  bookmark: Bookmark,
  like: Like,
  logo: Logo,
} satisfies Record<string, IconType>;

export type IconName = keyof typeof ICONS;