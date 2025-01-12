import { getBoardSearch } from "@/api/board/getBoardSearch";
import BoardFilter from "@/components/board/BoardFilter";
import BoardWrapper from "@/components/board/BoardWrapper";
import Banner from "@/components/ui/Banner";
import Search from "@/components/ui/Search";
import { Board } from "@/types/board/board";
import { PageResponse } from "@/types/response/page";
import React, { Suspense } from "react";

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
    <div className="w-full overflow-visible">
      <Banner
        title="게시판"
        description="신선한 문제들을 풀어볼 수 있는 대회들이 열리는 곳이에요."
      />
      <div className="h-except-banner px-52 overflow-visible">
        <div className="w-full h-full py-9 overflow-visible flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-3 overflow-visible">
            <div className="w-[520px]">
              <Search route="boards" />
            </div>
            <BoardFilter />
          </div>
          <Suspense>
            <BoardWrapper
              query={query as string | undefined}
              initialData={initialData as PageResponse<Board>}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Boards;
