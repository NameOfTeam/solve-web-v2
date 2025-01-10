import Banner from "@/components/Banner";
import Search from "@/components/Search";
import React, { Suspense } from "react";
import ProblemList from "@/components/ProblemList";
import ProblemFilter from "@/components/ProblemFilter";
import { getProblemSerch } from "@/api/problem/getProblemSearch";

const Problems = async ({
  searchParams,
}: {
  searchParams?:
    | Promise<{ [key: string]: string | string[] | undefined }>
    | undefined;
}) => {
  const query = (await searchParams)?.query;
  const initialData = await getProblemSerch(0, 15, [], "LATEST" , [], query as string)

  return (
    <div className="w-full overflow-visible">
      <Banner title="문제" description="취향에 맞는 문제를 풀어볼 수 있어요." />
      <div className="h-except-banner px-52 overflow-visible">
        <div className="w-full h-full py-9 overflow-visible flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-3 overflow-visible">
            <div className="w-[520px]">
              <Search route="problems" />
            </div>
            <ProblemFilter />
          </div>
          <Suspense>
            <ProblemList query={query as string | undefined} initialData={initialData} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Problems;
