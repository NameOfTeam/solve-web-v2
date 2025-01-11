"use client";

import React from "react";
import ThemedIcon from "../ui/ThemedIcon";
import { Workbook } from "@/types/workbook/workbook";
import { formatDate } from "@/utils/formatDate";
import Link from "next/link";

const WorkbookItem = ({ data }: { data: Workbook }) => {
  return (
    <Link
      href={`/workbooks/${data.id}`}
      className="w-full h-24 bg-container border border-bg-border rounded-lg flex flex-col justify-center items-center px-7"
    >
      <div className="w-full font-[600] text-base flex items-end whitespace-nowrap">
        <p className="text-lg flex-[8] text-main-container">{data.title}</p>
        <p className="flex-[1] text-main-container">만든이</p>
        <p className="flex-[1.5] text-main-container">업데이트</p>
        <p className="flex-[1] text-main-container">진행도</p>
        <div className="w-14 h-6 border border-container-border rounded-[4px] pl-1 pr-[6px] flex justify-between items-center self-center">
          <ThemedIcon
            height={20}
            width={20}
            icon="bookmark"
            variant="container"
            shade="border"
          />
          <p className="text-xs text-container-border">{data.bookmarkCount}</p>
        </div>
      </div>
      <div className="w-full font-[400] text-sm flex items-center whitespace-nowrap">
        <p className="text-sm flex-[8] text-main-container">
          No. {data.id}
          {data.description && ` ・ ${data.description}`}
        </p>
        <p className="flex-[1] text-info-500">{data.author.username}</p>
        <p className="flex-[1.5] text-main-container">
          {formatDate(data.updatedAt)}
        </p>
        <p className="flex-[1] text-main-container">
          {data.progress} / {data.problems.length}
        </p>
        <div className="w-14 h-6 border border-primary-700 bg-primary-700 rounded-[4px] pl-1 pr-[6px] flex justify-between items-center">
          <ThemedIcon height={20} width={20} icon="like" color="white" />
          <p className="text-xs text-white">{data.likeCount}</p>
        </div>
      </div>
    </Link>
  );
};

export default WorkbookItem;
