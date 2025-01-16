import React from "react";
import { Contest } from "@/types/contest/contest";
import { formatDateWithTime } from "@/utils/formatDateWithTime";
import { useCounter } from "@/hooks/counter/useCounter";
import Link from "next/link";

const ContestCard = ({ data }: { data: Contest }) => {
  const timeLeft = useCounter(data.startAt);

  return (
    <Link href={`/contests/${data.id}`} className="w-full h-52 px-7 py-9 relative flex flex-col justify-between border border-bg-border bg-container overflow-hidden rounded-lg cursor-pointer text-main-container">
      <div className="flex flex-col gap-y-2">
        <p className="text-[20px] font-[600]">{data.title}</p>
        <p>
          {formatDateWithTime(data.startAt)}
          <br />~ {formatDateWithTime(data.endAt)}
        </p>
      </div>
      <p className="text-base font-[600]">
        {data.state === "UPCOMING" ? (
          <span className="font-[400] text-sm">
            시작까지{" "}
            <span className="font-[600]">{timeLeft || "Loading..."}</span>
          </span>
        ) : data.state === "ENDED" ? (
          "종료"
        ) : (
          "진행중!"
        )}
      </p>
      <div
        className={`${
          data.state === "UPCOMING"
            ? "bg-primary-800"
            : data.state === "ONGOING"
            ? "bg-secondary-500"
            : "bg-danger-500"
        } w-10 h-48 rotate-45 absolute bottom-[-60px] right-4`}
      ></div>
    </Link>
  );
};

export default ContestCard;
