import BoardFilter from "@/components/board/BoardFilter";
import Banner from "@/components/ui/Banner";
import Search from "@/components/ui/Search";
import React, { PropsWithChildren, Suspense } from "react";

const BoardLayout = ({ children }: PropsWithChildren) => {
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
            {children}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default BoardLayout;
