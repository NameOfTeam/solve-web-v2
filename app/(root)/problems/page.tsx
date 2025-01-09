import Banner from "@/components/Banner";
import Search from "@/components/Search";
import React, { Suspense } from "react";
import ReactQueryProviders from "@/components/ReactQueryProviders";
import ProblemList from "@/components/ProblemList";
import ProblemFilter from "@/components/ProblemFilter";

const Problem = ({ searchParams }: { searchParams: { query: string } }) => {
  const { query } = searchParams;

  return (
    <div className="w-full overflow-visible">
      <Banner title="문제" description="취향에 맞는 문제를 풀어볼 수 있어요." />
      <div className="h-except-banner px-52 overflow-visible">
        <div className="w-full h-full py-9 overflow-visible flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-3 overflow-visible">
            <div className="w-[520px]">
              <Search />
            </div>
            <ProblemFilter />
          </div>
          <ReactQueryProviders>
            <ProblemList query={query} />
          </ReactQueryProviders>
        </div>
      </div>
    </div>
  );
};

export default Problem;
