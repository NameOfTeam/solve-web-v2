"use client";

import { useUserStore } from "@/stores/user/useUserStore";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BoardFilter = () => {
  const pathname = usePathname();
  const { user } = useUserStore();
  
  return (
    <div className="flex font-[400] text-base text-main-container overflow-scroll">
      <Link
        href="/boards"
        className={`h-8 flex items-center justify-center whitespace-nowrap cursor-pointer box-content px-4 ${
          pathname === "/boards"
            ? "border-secondary-700 border-b-[2px] font-[600]"
            : "border-bg-border border-b"
        }`}
        replace
      >
        전체
      </Link>
      <Link
        href="/boards/free"
        className={`h-8 flex items-center justify-center whitespace-nowrap cursor-pointer box-content px-4 ${
          pathname.includes("/boards/free")
            ? "border-secondary-700 border-b-[2px] font-[600]"
            : "border-bg-border border-b"
        }`}
        replace
      >
        자유
      </Link>
      <Link
        href="/boards/information"
        className={`h-8 flex items-center justify-center whitespace-nowrap border-b cursor-pointer box-content px-4 ${
          pathname.includes("/boards/information")
            ? "border-secondary-700 border-b-[2px] font-[600]"
            : "border-bg-border border-b"
        }`}
        replace
      >
        정보
      </Link>
      <Link
        href="/boards/question"
        className={`h-8 flex items-center justify-center whitespace-nowrap border-b cursor-pointer box-content px-4 ${
          pathname.includes("/boards/question")
            ? "border-secondary-700 border-b-[2px] font-[600]"
            : "border-bg-border border-b"
        }`}
        replace
      >
        질문
      </Link>
      <Link
        href="/boards/suggestion"
        className={`h-8 flex items-center justify-center whitespace-nowrap cursor-pointer box-content px-4 ${
          pathname.includes("/boards/suggestion")
            ? "border-secondary-700 border-b-[2px] font-[600]"
            : "border-bg-border border-b"
        }`}
        replace
      >
        수정 제안
      </Link>
      <Link
        href="/boards/notice"
        className={`h-8 flex items-center justify-center whitespace-nowrap cursor-pointer box-content px-4 ${
          pathname.includes("/boards/notice")
            ? "border-secondary-700 border-b-[2px] font-[600]"
            : "border-bg-border border-b"
        }`}
        replace
      >
        공지사항
      </Link>
      {user?.id && (
        <Link
          href="/boards/write"
          className={`h-8 flex items-center justify-center whitespace-nowrap cursor-pointer box-content px-4 ${
            pathname.includes("/boards/write")
              ? "border-secondary-700 border-b-[2px] font-[600]"
              : "border-bg-border border-b"
          }`}
          replace
        >
          글쓰기
        </Link>
      )}
    </div>
  );
};

export default BoardFilter;
