"use client";

import React from "react";
import { formatDate } from "@/utils/formatDate";
import { Contest } from "@/types/contest/contest";
import { formatLeftTime } from "@/utils/formatLeftTime";
import { useCounter } from "@/hooks/counter/useCounter";
import Link from "next/link";

const ContestItem = ({ data }: { data: Contest }) => {
  const startTimeLeft = useCounter(data.startAt);
  const endTimeLeft = useCounter(data.endAt);

  return (
    <Link href={`/contests/${data.id}`} className="w-full h-24 bg-container border border-bg-border rounded-lg flex flex-col justify-center items-center px-7">
      <div className="w-full font-[600] text-base flex items-end whitespace-nowrap">
        <p className="text-lg flex-[4.5] text-main-container">{data.title}</p>
        <p className="flex-[1.3] text-main-container">
          {data.state === "UPCOMING"
            ? "시작까지"
            : data.state === "ONGOING"
            ? "남은시간"
            : "우승자"}
        </p>
        <p className="flex-[1] text-main-container">시작</p>
        <p className="flex-[1] text-main-container">종료</p>
      </div>
      <div className="w-full font-[400] text-sm flex items-center whitespace-nowrap">
        <p className="text-sm flex-[4.5] text-main-container">
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
        <p className="flex-[1.3] text-main-container">
          {data.state === "UPCOMING"
            ? startTimeLeft
            : data.state === "ONGOING"
            ? endTimeLeft
            : data.winner?.username || ""}
        </p>
        <p className="flex-[1] text-main-container">
          {formatDate(data.startAt)}
        </p>
        <p className="flex-[1] text-main-container">{formatDate(data.endAt)}</p>
      </div>
    </Link>
  );
};

export default ContestItem;
