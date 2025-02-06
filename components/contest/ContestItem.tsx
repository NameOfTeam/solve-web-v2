"use client";

import React from "react";
import { formatDate } from "@/utils/formatDate";
import { Contest } from "@/types/contest/contest";
import { useCounter } from "@/hooks/counter/useCounter";
import Link from "next/link";

const ContestItem = ({ data }: { data: Contest }) => {
  const startTimeLeft = useCounter(data.startAt);
  const endTimeLeft = useCounter(data.endAt);

  return (
    <Link
      href={`/contests/${data.id}`}
      className="w-full h-fit bg-container rounded-lg flex items-center px-7 py-5 whitespace-nowrap text-base gap-2 justify-between max-lg:flex-col max-lg:gap-4 max-lg:items-start"
    >
      <div className="gap-1 flex-col overflow-hidden text-ellipsis max-lg:w-full">
        <p className="text-lg text-main-container overflow-hidden text-ellipsis font-[600]">{data.title}</p>
        <p className="text-sm text-main-container overflow-hidden whitespace-nowrap text-ellipsis">
          <span
            className={`${
              data.state === "UPCOMING"
                ? "text-primary-800"
                : data.state === "ONGOING"
                ? "text-secondary-500"
                : "text-danger-500"
            }`}
          >
            {data.state === "UPCOMING"
              ? "진행 예정"
              : data.state === "ONGOING"
              ? "진행중"
              : "종료"}
          </span>

          {data.description && ` ・ ${data.description}`}
        </p>
      </div>

      <div className="flex gap-8 items-center max-lg:w-full max-lg:justify-between max-md:grid max-md:grid-cols-2 max-md:gap-2">
        <div className="flex gap-[2px] flex-col min-w-28 max-lg:col-span-2">
          <p className="text-main-container font-[600]">
            {data.state === "UPCOMING"
              ? "시작까지"
              : data.state === "ONGOING"
              ? "남은시간"
              : "우승자"}
          </p>
          <p className="text-main-container text-sm">
          {data.state === "UPCOMING"
            ? startTimeLeft
            : data.state === "ONGOING"
            ? endTimeLeft
            : data.winner?.username || "우승자 없음"}
          </p>
        </div>

        <div className="flex gap-[2px] flex-col">
          <p className="text-main-container font-[600]">시작</p>
          <p className="text-main-container text-sm">{formatDate(data.startAt)}</p>
        </div>

        <div className="flex gap-[2px] flex-col">
          <p className="text-main-container font-[600]">종료</p>
          <p className="text-main-container text-sm">{formatDate(data.endAt)}</p>
        </div>
      </div>
    </Link>
  );
};

export default ContestItem;
