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
      <div className="w-full font-[600] gap-1 text-base flex items-end whitespace-nowrap">
        <p className="text-lg flex-[8] text-main-container">{data.title}</p>
        <p className="flex-[1] text-main-container">만든이</p>
        <p className="flex-[1.5] text-main-container">업데이트</p>
        <p className="flex-[1] text-main-container">진행도</p>
        <div
          className={`w-14 h-6 border ${
            data.isLiked
              ? "border-primary-700 bg-primary-700"
              : "border-container-border bg-container"
          } self-start rounded-[4px] pl-1 pr-[6px] flex justify-between items-center`}
        >
          <ThemedIcon
            height={20}
            width={20}
            icon="bookmark"
            color={data.isLiked ? "white" : ""}
            variant="container"
            shade="border"
          />
          <p
            className={`text-xs ${
              data.isLiked ? "text-white" : "text-container-border"
            }`}
          >
            {data.likeCount}
          </p>
        </div>
      </div>
      <div className="w-full font-[400] gap-1 text-sm flex items-center whitespace-nowrap">
        <p className="text-sm flex-[8] text-main-container overflow-hidden whitespace-nowrap text-ellipsis">
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
        <div
          className={`w-14 h-6 border ${
            data.isLiked
              ? "border-primary-700 bg-primary-700"
              : "border-container-border bg-container"
          } self-end rounded-[4px] pl-1 pr-[6px] flex justify-between items-center`}
        >
          <ThemedIcon
            height={20}
            width={20}
            icon="like"
            color={data.isLiked ? "white" : ""}
            variant="container"
            shade="border"
          />
          <p
            className={`text-xs ${
              data.isLiked ? "text-white" : "text-container-border"
            }`}
          >
            {data.likeCount}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default WorkbookItem;
