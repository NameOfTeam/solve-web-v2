"use client";

import { useUserStore } from "@/stores/user/useUserStore";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const BoardFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useUserStore();

  return (
    <div className="flex font-[400] text-base text-main-container">
      <div
        className={`h-8 flex items-center justify-center  cursor-pointer box-content px-4 ${
          pathname === "/boards"
            ? "border-secondary-700 border-b-[2px] font-[600]"
            : "border-bg-border border-b"
        }`}
        onClick={() => router.push("/boards")}
      >
        전체
      </div>
      <div
        className={`h-8 flex items-center justify-center cursor-pointer box-content px-4 ${
          pathname === "/boards/free"
            ? "border-secondary-700 border-b-[2px] font-[600]"
            : "border-bg-border border-b"
        }`}
        onClick={() => router.push("/boards/free")}
      >
        자유
      </div>
      <div
        className={`h-8 flex items-center justify-center border-b cursor-pointer box-content px-4 ${
          pathname === "/boards/information"
            ? "border-secondary-700 border-b-[2px] font-[600]"
            : "border-bg-border border-b"
        }`}
        onClick={() => router.push("/boards/information")}
      >
        정보
      </div>
      <div
        className={`h-8 flex items-center justify-center border-b cursor-pointer box-content px-4 ${
          pathname === "/boards/question"
            ? "border-secondary-700 border-b-[2px] font-[600]"
            : "border-bg-border border-b"
        }`}
        onClick={() => router.push("/boards/question")}
      >
        질문
      </div>
      <div
        className={`h-8 flex items-center justify-center cursor-pointer box-content px-4 ${
          pathname === "/boards/suggestion"
            ? "border-secondary-700 border-b-[2px] font-[600]"
            : "border-bg-border border-b"
        }`}
        onClick={() => router.push("/boards/suggestion")}
      >
        수정 제안
      </div>
      <div
        className={`h-8 flex items-center justify-center cursor-pointer box-content px-4 ${
          pathname === "/boards/notice"
            ? "border-secondary-700 border-b-[2px] font-[600]"
            : "border-bg-border border-b"
        }`}
        onClick={() => router.push("/boards/notice")}
      >
        공지사항
      </div>
      {user?.id && (
        <div
          className={`h-8 flex items-center justify-center cursor-pointer box-content px-4 ${
            pathname === "/boards/write"
              ? "border-secondary-700 border-b-[2px] font-[600]"
              : "border-bg-border border-b"
          }`}
          onClick={() => router.push("/boards/write")}
        >
          글쓰기
        </div>
      )}
    </div>
  );
};

export default BoardFilter;
