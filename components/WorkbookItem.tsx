"use client";

import React from "react";
import ThemedIcon from "./ThemedIcon";
import { ICONS } from "@/constants/icons";

const WorkbookItem = () => {
  return (
    <div className="w-full h-24 bg-container border border-bg-border rounded-lg flex flex-col justify-center items-center px-7">
      <div className="w-full font-[600] text-base flex items-end whitespace-nowrap">
        <p className="text-lg flex-[8] text-main-container">
          삼성 코테 준비 문제
        </p>
        <p className="flex-[1] text-main-container">만든이</p>
        <p className="flex-[1.3] text-main-container">업데이트</p>
        <p className="flex-[1] text-main-container">진행도</p>
        <div className="w-14 h-6 border border-container-border rounded-[4px] pl-1 pr-[6px] flex justify-between items-center self-center">
          <ThemedIcon
            height={20}
            width={20}
            icon="bookmark"
            variant="container"
            shade="border"
          />
          <p className="text-xs text-container-border">112</p>
        </div>
      </div>
      <div className="w-full font-[400] text-sm flex items-center whitespace-nowrap">
        <p className="text-lg flex-[8] text-main-container">
          No. 3332 ・ 삼성 코테의 기출문제를 모았습니다.
        </p>
        <p className="flex-[1] text-info-500">jbj338033</p>
        <p className="flex-[1.3] text-main-container">2024년 12월 24일</p>
        <p className="flex-[1] text-main-container">10 / 22</p>
        <div className="w-14 h-6 border border-primary-700 bg-primary-700 rounded-[4px] pl-1 pr-[6px] flex justify-between items-center">
          <ThemedIcon
            height={20}
            width={20}
            icon="like"
            color="white"
          />
          <p className="text-xs text-white">112</p>
        </div>
      </div>
    </div>
  );
};

export default WorkbookItem;
