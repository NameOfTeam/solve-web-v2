"use client";

import { Contest } from "@/types/contest/contest";
import React from "react";
import ContestCard from "../contest/ContestCard";

const CardWrapper = ({ data }: { data: Contest[] }) => {
  return (
    <>
      {data.length > 0 ? (
        <div className="w-full grid grid-cols-4 gap-3 max-xl:grid-cols-2 max-[850px]:grid-cols-1">
          {data.map((item) => (
            <ContestCard key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <div className="w-full h-44 flex justify-center items-center bg-container rounded-lg">
          <p className="text-bg-border text-2xl">대회가 없습니다.</p>
        </div>
      )}
    </>
  );
};
export default CardWrapper;
