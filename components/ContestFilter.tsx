"use client";

import { useContestFilterStore } from "@/stores/contest/useContestFilterStore";
import React from "react";

const ContestFilter = () => {
  const { state, setState } = useContestFilterStore();

  return (
    <div className="flex font-[400] text-base text-main-container">
      <div
        className={`w-16 h-8 flex items-center justify-center  cursor-pointer box-content ${
          state === null
            ? "border-secondary-700 border-b-[2px]"
            : "border-bg-border border-b"
        }`}
        onClick={() => setState(null)}
      >
        전체
      </div>
      <div
        className={`w-16 h-8 flex items-center justify-center cursor-pointer box-content ${
          state === "UPCOMING"
            ? "border-secondary-700 border-b-[2px]"
            : "border-bg-border border-b"
        }`}
        onClick={() => setState("UPCOMING")}
      >
        예정
      </div>
      <div
        className={`w-16 h-8 flex items-center justify-center border-b cursor-pointer box-content ${
          state === "ONGOING"
            ? "border-secondary-700 border-b-[2px]"
            : "border-bg-border border-b"
        }`}
        onClick={() => setState("ONGOING")}
      >
        진행중
      </div>
      <div
        className={`w-16 h-8 flex items-center justify-center cursor-pointer box-content ${
          state === "ENDED"
            ? "border-secondary-700 border-b-[2px]"
            : "border-bg-border border-b"
        }`}
        onClick={() => setState("ENDED")}
      >
        종료
      </div>
    </div>
  );
};

export default ContestFilter;
