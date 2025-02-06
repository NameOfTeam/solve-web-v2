import React from "react";
import { Contest } from "@/types/contest/contest";
import { formatDateWithTime } from "@/utils/formatDateWithTime";
import { useCounter } from "@/hooks/counter/useCounter";
import Link from "next/link";

const ContestCard = ({ data }: { data: Contest }) => {
  const timeLeft = useCounter(data.startAt);

  return (
    <Link href={`/contests/${data.id}`} className="w-full h-44 px-7 py-6 pb-7 relative flex flex-col justify-between bg-container overflow-hidden rounded-lg text-main-container">
      <div className="flex flex-col gap-y-[6px]">
        {data.state === "UPCOMING" ? (
          <p className="text-sm text-primary-700 font-[600]">진행 예정</p>
        ) : data.state === "ENDED" ? (
          <p className="text-sm text-danger-500 font-[600]">종료</p>
        ) : (
          <p className="text-sm text-secondary-500 font-[600]">진행중</p>
        )}
        <div className="flex flex-col gap-y-1">
          <p className="text-[20px] font-[600] cursor-pointer text-ellipsis overflow-hidden whitespace-nowrap">{data.title}</p>
          <p className="text-xs">
            {formatDateWithTime(data.startAt)}
            <br />~ {formatDateWithTime(data.endAt)}
          </p>
        </div>
      </div>
      <p className="text-base font-[600]">
        {data.state === "UPCOMING" ? (
          <span className="font-[400] text-sm">
            시작까지{" "}
            <span className="font-[600]">{timeLeft || "Loading..."}</span>
          </span>
        ) : data.state === "ENDED" ? (
          <span>
            {data.winner === null ?
            <span className="text-sm">우승자 없음</span> :
            <span>우승<p className="text-info-500">{data.winner.username}</p></span>}
          </span>
        ) : (
          "진행중!"
        )}
      </p>
    </Link>
  );
};

export default ContestCard;
