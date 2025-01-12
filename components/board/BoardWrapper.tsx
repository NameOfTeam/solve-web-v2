"use client";

import { useBoardFilterStore } from "@/stores/board/useBoardFilterStore";
import React from "react";
import BoardList from "./BoardList";
import { PageResponse } from "@/types/response/page";
import { Board } from "@/types/board/board";
import BoardWrite from "./BoardWrite";

const BoardWrapper = ({
  initialData,
  query,
}: {
  initialData: PageResponse<Board>;
  query?: string;
}) => {
  const { state } = useBoardFilterStore();

  return (
    <>
      {state === "WRITE" ? (
        <BoardWrite />
      ) : (
        <BoardList initialData={initialData} query={query} />
      )}
    </>
  );
};

export default BoardWrapper;
