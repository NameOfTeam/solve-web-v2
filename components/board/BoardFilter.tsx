"use client";

import { useUserStore } from "@/stores/user/useUserStore";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const BoardFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useUserStore();

  useEffect(()=>{
    router.prefetch("/boards/free");
    router.prefetch("/boards/information");
    router.prefetch("/boards/question");
    router.prefetch("/boards/suggestion");
    router.prefetch("/boards/notice");
  },[router]);

  return (
    <div className="flex font-[400] text-base text-main-container">
      <div
        className={`h-8 flex items-center justify-center  cursor-pointer box-content px-4 ${
          pathname === "/boards"
            ? "border-secondary-700 border-b-[2px] font-[600]"
            : "border-bg-border border-b"
        }`}
        onClick={() => router.replace("/boards")}
      >
        전체
      </div>
      <div
        className={`h-8 flex items-center justify-center cursor-pointer box-content px-4 ${
          pathname.includes("/boards/free")
            ? "border-secondary-700 border-b-[2px] font-[600]"
            : "border-bg-border border-b"
        }`}
        onClick={() => router.replace("/boards/free")}
      >
        자유
      </div>
      <div
        className={`h-8 flex items-center justify-center border-b cursor-pointer box-content px-4 ${
          pathname.includes("/boards/information")
            ? "border-secondary-700 border-b-[2px] font-[600]"
            : "border-bg-border border-b"
        }`}
        onClick={() => router.replace("/boards/information")}
      >
        정보
      </div>
      <div
        className={`h-8 flex items-center justify-center border-b cursor-pointer box-content px-4 ${
          pathname.includes("/boards/question")
            ? "border-secondary-700 border-b-[2px] font-[600]"
            : "border-bg-border border-b"
        }`}
        onClick={() => router.replace("/boards/question")}
      >
        질문
      </div>
      <div
        className={`h-8 flex items-center justify-center cursor-pointer box-content px-4 ${
          pathname.includes("/boards/suggestion")
            ? "border-secondary-700 border-b-[2px] font-[600]"
            : "border-bg-border border-b"
        }`}
        onClick={() => router.replace("/boards/suggestion")}
      >
        수정 제안
      </div>
      <div
        className={`h-8 flex items-center justify-center cursor-pointer box-content px-4 ${
          pathname.includes("/boards/notice")
            ? "border-secondary-700 border-b-[2px] font-[600]"
            : "border-bg-border border-b"
        }`}
        onClick={() => router.replace("/boards/notice")}
      >
        공지사항
      </div>
      {user?.id && (
        <div
          className={`h-8 flex items-center justify-center cursor-pointer box-content px-4 ${
            pathname.includes("/boards/write")
              ? "border-secondary-700 border-b-[2px] font-[600]"
              : "border-bg-border border-b"
          }`}
          onClick={() => router.replace("/boards/write")}
        >
          글쓰기
        </div>
      )}
    </div>
  );
};

export default BoardFilter;
