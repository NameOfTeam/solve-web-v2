"use client";

import { useBoardFilterStore } from "@/stores/board/useBoardFilterStore";
import React from "react";

const BoardFilter = () => {
  const { state, setState } = useBoardFilterStore();

  return (
    <div className="flex font-[400] text-base text-main-container">
      <div
        className={`min-w-16 h-8 flex items-center justify-center  cursor-pointer box-content px-1 ${
          state === null
            ? "border-secondary-700 border-b-[2px]"
            : "border-bg-border border-b"
        }`}
        onClick={() => setState(null)}
      >
        전체
      </div>
      <div
        className={`min-w-16 h-8 flex items-center justify-center cursor-pointer box-content px-1 ${
          state === "FREE"
            ? "border-secondary-700 border-b-[2px]"
            : "border-bg-border border-b"
        }`}
        onClick={() => setState("FREE")}
      >
        자유
      </div>
      <div
        className={`min-w-16 h-8 flex items-center justify-center border-b cursor-pointer box-content px-1 ${
          state === "QUESTION"
            ? "border-secondary-700 border-b-[2px]"
            : "border-bg-border border-b"
        }`}
        onClick={() => setState("QUESTION")}
      >
        질문
      </div>
      <div
        className={`min-w-16 h-8 flex items-center justify-center cursor-pointer box-content px-2 ${
          state === "SUGGESTION"
            ? "border-secondary-700 border-b-[2px]"
            : "border-bg-border border-b"
        }`}
        onClick={() => setState("SUGGESTION")}
      >
        수정 제안
      </div>
      <div
        className={`min-w-16 h-8 flex items-center justify-center cursor-pointer box-content px-2 ${
          state === "ANOUNCE"
            ? "border-secondary-700 border-b-[2px]"
            : "border-bg-border border-b"
        }`}
        onClick={() => setState("ANOUNCE")}
      >
        공지사항
      </div>
      <div
        className={`min-w-16 h-8 flex items-center justify-center cursor-pointer box-content px-1 ${
          state === "WRITE"
            ? "border-secondary-700 border-b-[2px]"
            : "border-bg-border border-b"
        }`}
        onClick={() => setState("WRITE")}
      >
        글쓰기
      </div>
    </div>
  );
};

export default BoardFilter;