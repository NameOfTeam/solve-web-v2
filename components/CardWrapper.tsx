"use client"

import { Contest } from "@/types/contest/contest";
import React from "react";
import ContestCard from "./ContestCard";

const CardWrapper = ({ data }: { data: Contest[] }) => {
  return (
    <div className="w-full grid grid-cols-3 gap-6">
      {data?.map((item) => (
        <ContestCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default CardWrapper;
