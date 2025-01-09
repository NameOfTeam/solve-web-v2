import Banner from "@/components/Banner";
import ContestFilter from "@/components/ContestFilter";
import ContestList from "@/components/ContestList";
import Search from "@/components/Search";
import React from "react";

const Contests = ({ searchParams }: { searchParams: { query: string } }) => {
  const { query } = searchParams;

  return (
    <div className="w-full overflow-visible">
      <Banner
        title="대회"
        description="신선한 문제들을 풀어볼 수 있는 대회들이 열리는 곳이에요."
      /> 
      <div className="h-except-banner px-52 overflow-visible">
        <div className="w-full h-full py-9 overflow-visible flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-3 overflow-visible">
            <div className="w-[520px]">
              <Search route="contests" />
            </div>
            <ContestFilter />
          </div>
            <ContestList query={query} />
        </div>
      </div>
    </div>
  );
};

export default Contests;
