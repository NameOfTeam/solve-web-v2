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
      className="w-full h-fit bg-container rounded-lg flex flex-col justify-center items-center px-7 py-5"
    >
      <div className="w-full font-[400] text-base whitespace-nowrap flex lg:justify-between items-center max-lg:flex-col max-lg:gap-4 max-lg:items-start ">
        <div className="flex gap-1 flex-col lg:max-w-72 max-lg:w-full">
          <p className="font-[600] text-lg text-main-container">{data.title}</p>
          <p className="text-sm text-main-container overflow-hidden whitespace-nowrap text-ellipsis">
            No. {data.id}
            {data.description && ` ・ ${data.description}`}
          </p>
        </div>

        <div className="flex gap-8 max-lg:w-full max-lg:justify-between max-md:grid max-md:grid-cols-2 max-md:gap-2">
          <div className="flex gap-1 flex-col">
            <p className="font-[600] text-main-container">만든이</p>
            <p className=" text-info-500">{data.author.username}</p>
          </div>

          <div className="flex gap-1 flex-col">
            <p className="font-[600] text-main-container">업데이트</p>
            <p className="text-main-container">
              {formatDate(data.updatedAt)}
            </p>
          </div>

          <div className="flex gap-1 flex-col">
            <p className="font-[600] text-main-container">진행도</p>
            <p className="text-main-container">
              {data.progress} / {data.problems.length}
            </p>
          </div>

          <div className="flex gap-1 flex-col max-md:h-full">
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
        </div>

      </div>
    </Link>
  );
};

export default WorkbookItem;
