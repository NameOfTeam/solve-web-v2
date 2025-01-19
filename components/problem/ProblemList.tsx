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
      <div className="w-full h-full border border-bg-border bg-container rounded-lg">
        <div className="w-full h-16 border-b border-bg-border flex items-center text-lg font-[600] px-6 text-main-container">
          <p className="flex-[0.5] px-4 text-center">랭크</p>
          <p className="flex-[0.5] px-4 text-center">#</p>
          <p className="flex-[8] px-4">제목</p>
          <p className="flex-[1] px-4 text-center">푼 사람 수</p>
          <p className="flex-[1] px-4 text-center">정답률</p>
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
                <p className="flex-[0.5] px-4 flex justify-center items-center">
                  <Image
                    src={`/tiers/${item.tier.toLowerCase()}.svg`}
                    alt=""
                    width={32}
                    height={32}
                  />
                </p>
                <p className="flex-[0.5] px-4 text-center">{item.id}</p>
                <p
                  className={`flex-[8] px-4 ${
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
                <p className="flex-[1] px-4 text-center">
                  {item.solvedCount || 0}
                </p>
                <p className="flex-[1] px-4 text-center">{item.correctRate}%</p>
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
