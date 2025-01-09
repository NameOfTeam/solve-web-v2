import React, { useEffect, useState } from "react";
import { Contest } from "@/types/contest/contest";
import { formatDateWithTime } from "@/utils/formatDateWithTime";

const ContestCard = ({ data }: { data: Contest }) => {
  const [timeLeft, setTimeLeft] = useState<string | null>(null);

  useEffect(() => {
    if (data.state === "UPCOMING") {
      const updateLeftTime = () => {
        const now = new Date();
        const diff = new Date(data.startAt).getTime() - now.getTime();
        if (diff <= 0) {
          setTimeLeft(null);
        } else {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((diff / (1000 * 60)) % 60);
          const seconds = Math.floor((diff / 1000) % 60);
          setTimeLeft(`${days}일 ${hours}시간 ${minutes}분 ${seconds}초`);
        }
      };

      updateLeftTime();
      const interval = setInterval(updateLeftTime, 1000);

      return () => clearInterval(interval);
    }
  }, [data.startAt, data.state]);

  return (
    <div className="w-full h-64 px-7 py-9 relative flex flex-col justify-between border border-bg-border bg-container rounded-lg cursor-pointer text-main-container">
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
    </div>
  );
};

export default ContestCard;
