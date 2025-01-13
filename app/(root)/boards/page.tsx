import { getBoardSearch } from "@/api/board/getBoardSearch";
import BoardWrapper from "@/components/board/BoardWrapper";
import { Board } from "@/types/board/board";
import { PageResponse } from "@/types/response/page";
import React from "react";

const Boards = async ({
  searchParams,
}: {
  searchParams?:
    | Promise<{ [key: string]: string | string[] | undefined }>
    | undefined;
}) => {
  const query = (await searchParams)?.query;
  const initialData = await getBoardSearch(0, 15, null, query as string);

  return (
    <BoardWrapper
      query={query as string | undefined}
      initialData={initialData as PageResponse<Board>}
    />
  );
};

export default Boards;
