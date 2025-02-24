import Banner from "@/components/ui/Banner";
import ContestFilter from "@/components/contest/ContestFilter";
import Search from "@/components/ui/Search";
import React, { PropsWithChildren, Suspense } from "react";
import ProgressProvider from "@/components/provider/ProgressProvider";
const ContestsLayout = async ({ children }: PropsWithChildren) => {
  return (
    <ProgressProvider>
      <div className="w-full">
        <Banner
          title="대회"
          description="신선한 문제들을 풀어볼 수 있는 대회들이 열리는 곳이에요."
        />
        <div className="h-except-banner flex flex-col items-center">
          <div className="w-[72%] h-full py-9 flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-3">   
              <Search route="contests" />
              <ContestFilter />
            </div>
            {children}
          </div>
        </div>
      </div>
    </ProgressProvider>
  );
};

export default ContestsLayout;
