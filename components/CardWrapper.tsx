"use client";

import { Contest } from "@/types/contest/contest";
import React from "react";
import ContestCard from "./ContestCard";

const CardWrapper = ({ data }: { data: Contest[] }) => {
  return (
    <>
      {data.length > 0 ? (
        <div className="w-full grid grid-cols-3 gap-6">
          {data.map((item) => (
            <ContestCard key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <div className="w-full h-64 flex justify-center items-center border border-bg-border rounded-lg">
          <p className="text-bg-border text-2xl">대회가 없습니다.</p>
        </div>
      )}
    </>
  );
};
export default CardWrapper;
