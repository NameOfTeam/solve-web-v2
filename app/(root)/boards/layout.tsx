import BoardFilter from "@/components/board/BoardTabs";
import Banner from "@/components/ui/Banner";
import Search from "@/components/ui/Search";
import React, { PropsWithChildren } from "react";

const BoardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full">
      <Banner
        title="게시판"
        description="신선한 문제들을 풀어볼 수 있는 대회들이 열리는 곳이에요."
      />
      <div className="h-except-banner flex flex-col items-center">
        <div className="w-[72%] h-full py-9 flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-3">
            <Search route="boards" />
            <BoardFilter />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default BoardLayout;
