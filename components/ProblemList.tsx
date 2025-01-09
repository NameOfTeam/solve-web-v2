"use client";

import useGetProblemList from "@/hooks/problem/useGetProblemList";
import React from "react";

const ProblemList = () => {
  const problems = useGetProblemList();

  return (
    <div className="w-full h-full py-6">
      <div className="w-full h-16 border-b border-bg-border flex items-center text-lg font-[600]">
        <p className="flex-1">랭크</p>
        <p className="flex-1">#</p>
        <p className="flex-[8]">제목</p>
        <p className="flex-1">푼 사람 수</p>
        <p className="flex-1">정답률</p>
      </div>
      <div>
        {problems?.content.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
    </div>
  );
};

export default ProblemList;
