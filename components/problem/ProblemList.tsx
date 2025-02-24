"use client";

import useGetProblemList from "@/hooks/problem/useGetProblemList";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { PageResponse } from "@/types/response/page";
import { Problem } from "@/types/problem/problem";
import PageController from "../ui/PageController";

const ProblemList = ({
  initialData,
  query,
}: {
  initialData: PageResponse<Problem>;
  query?: string;
}) => {
  const [page, setPage] = useState(0);
  const problems = useGetProblemList({ page, query }, initialData);

  return (
    <>
      <div className="w-full h-full bg-container rounded-lg">
        <div className="w-full h-14 border-b border-bg-border flex items-center text-base font-[600] px-6 text-main-container">
          <p className="w-16 text-center whitespace-nowrap flex-shrink-0">랭크</p>
          <p className="w-14 text-center flex-shrink-0">#</p>
          <p className="flex-[1] px-4 whitespace-nowrap flex-shrink-0">제목</p>
          <p className="w-28 text-center whitespace-nowrap max-sm:hidden flex-shrink-0">푼 사람 수</p>
          <p className="w-20 text-center whitespace-nowrap flex-shrink-0">정답률</p>
        </div>
        <div>
          {problems && problems.content.length > 0 ? (
            problems.content.map((item, idx) => (
              <Link
                href={`/solve/${item.id}`}
                className={`w-full h-14 ${
                  problems.content.length - 1 !== idx && "border-b"
                } border-bg-border flex items-center text-base font-[400] px-6 text-main-container`}
                key={item.id}
              >
                <p className="w-8 h-8 m-4 flex justify-center relative flex-shrink-0">
                  <Image
                    src={`/tiers/${item.tier.toLowerCase()}.svg`}
                    alt=""
  
                    fill={true}
                  />
                </p>
                <p className="w-14 text-center flex-shrink-0">{item.id}</p>
                <p
                  className={`flex-1 pl-4 whitespace-nowrap text-ellipsis overflow-hidden ${
                    item.state === "ACCEPTED"
                      ? "text-secondary-500"
                      : item.state === "JUDGING_IN_PROGRESS" ||
                        item.state === "PENDING" ||
                        item.state === "JUDGING" || 
                        !item.state
                      ? "text-main-container"
                      : "text-danger-500"
                  }`}
                >
                  {item.title}
                </p>
                <p className="w-28 text-center max-sm:hidden flex-shrink-0">
                  {item.solvedCount || 0}
                </p>
                <p className="w-20 text-center flex-shrink-0">{item.correctRate}%</p>
              </Link>
            ))
          ) : (
            <div className="w-full h-72 flex items-center justify-center">
              <p className="text-2xl text-bg-border">등록된 문제가 없습니다.</p>
            </div>
          )}
        </div>
      </div>
      <PageController page={page} setPage={setPage} data={problems} />
    </>
  );
};

export default ProblemList;
