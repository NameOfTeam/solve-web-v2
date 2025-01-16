"use client";

import React, { useState } from "react";
import useGetContestList from "@/hooks/contest/useGetContestList";
import ContestItem from "./ContestItem";
import { PageResponse } from "@/types/response/page";
import { Contest } from "@/types/contest/contest";
import PageController from "../ui/PageController";

const ContestList = ({
  initialData,
  state,
  query,
}: {
  initialData: PageResponse<Contest>;
  state: "UPCOMING" | "ONGOING" | "ENDED" | null
  query?: string;
}) => {
  const [page, setPage] = useState(0);
  const contests = useGetContestList({ page, query }, state, initialData);

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
      <PageController page={page} setPage={setPage} data={contests} />
    </>
  );
};

export default ContestList;
