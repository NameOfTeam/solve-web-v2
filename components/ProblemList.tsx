"use client";

import useGetProblemList from "@/hooks/problem/useGetProblemList";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ThemedIcon from "./ThemedIcon";

const ProblemList = ({ query }: { query: string }) => {
  const [page, setPage] = useState(0);
  const problems = useGetProblemList({ page, query });

  const totalPages = problems?.totalPages || 0;
  const startPage = Math.max(0, page - 4);
  const endPage = Math.min(totalPages, startPage + 10);

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
                href={`/problems/${item.id}`}
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
                      : "text-main-container"
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
      <div className="w-full flex justify-center gap-x-3">
        <div
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          className={`w-10 h-10 bg-container border border-bg-border rounded-lg flex justify-center items-center text-xl cursor-pointer ${
            page === 0 && "opacity-0"
          }`}
        >
          <ThemedIcon
            icon="arrow-left-back"
            width={32}
            height={32}
            variant="bg"
            shade="border"
          />
        </div>
        {Array.from({ length: endPage - startPage }).map((_, idx) => {
          const pageNumber = startPage + idx;
          return (
            <div
              key={pageNumber}
              onClick={() => setPage(pageNumber)}
              className={`w-10 h-10 bg-container border border-bg-border rounded-lg flex justify-center items-center text-xl cursor-pointer ${
                page === pageNumber
                  ? "font-[600] text-main-container"
                  : "font-[400] text-bg-border"
              }`}
            >
              {pageNumber + 1}
            </div>
          );
        })}
        <div
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
          className={`w-10 h-10 bg-container border border-bg-border rounded-lg flex justify-center items-center text-xl cursor-pointer ${
            problems && page === totalPages - 1 && "opacity-0"
          }`}
        >
          <ThemedIcon
            icon="arrow-left-back"
            width={32}
            height={32}
            variant="bg"
            shade="border"
            className="rotate-180"
          />
        </div>
      </div>
    </>
  );
};

export default ProblemList;
