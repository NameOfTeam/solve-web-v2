import React from 'react'
import { getBoardSearch } from "@/api/board/getBoardSearch";
import BoardList from "@/components/board/BoardList";
import { Board } from "@/types/board/board";
import { PageResponse } from "@/types/response/page";

const QuestionBoard = async ({
  searchParams,
}: {
  searchParams?:
    | Promise<{ [key: string]: string | string[] | undefined }>
    | undefined;
}) => {
  const query = (await searchParams)?.query;
  const initialData = await getBoardSearch(0, 15, "QUESTION", query as string);

  return (
    <BoardList
      initialData={initialData as PageResponse<Board>}
      query={query as string | undefined}
      state="QUESTION"
    />
  );
};
export default QuestionBoard