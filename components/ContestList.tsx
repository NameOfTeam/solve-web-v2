"use client";

import React, { useState } from "react";
import ThemedIcon from "./ThemedIcon";
import useGetContestList from "@/hooks/contest/useGetContestList";
import ContestItem from "./ContestItem";
import { PageResponse } from "@/types/common/page";
import { Contest } from "@/types/contest/contest";

const ContestList = ({
  initialData,
  query,
}: {
  initialData?: PageResponse<Contest>;
  query?: string;
}) => {
  const [page, setPage] = useState(0);
  const contests = useGetContestList({ page, query }, initialData);

  const totalPages = contests?.totalPages || 0;
  const startPage = Math.max(0, page - 4);
  const endPage = Math.min(totalPages, startPage + 10);

  return (
    <>
      <div className="w-full py-6 flex flex-col gap-y-3">
        {contests && contests.content.length > 0 ? (
          contests.content.map((item) => (
            <ContestItem data={item} key={item.id} />
          ))
        ) : (
          <div className="w-full h-72 flex items-center justify-center">
            <p className="text-2xl text-bg-border">등록된 대회가 없습니다.</p>
          </div>
        )}
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
            contests && page === totalPages - 1 && "opacity-0"
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

export default ContestList;
