import Banner from "@/components/ui/Banner";
import Search from "@/components/ui/Search";
import React, { Suspense } from "react";
import ProblemList from "@/components/problem/ProblemList";
import ProblemFilter from "@/components/problem/ProblemFilter";
import { getProblemSerch } from "@/api/problem/getProblemSearch";
import { PageResponse } from "@/types/response/page";
import { Problem } from "@/types/problem/problem";

const Problems = async ({
  searchParams,
}: {
  searchParams?:
    | Promise<{ [key: string]: string | string[] | undefined }>
    | undefined;
}) => {
  const query = (await searchParams)?.query;
  const initialData = await getProblemSerch(
    0,
    15,
    [],
    "LATEST",
    [],
    query as string
  );

  return (
    <div className="w-full flex items-center flex-col">
      <Banner title="문제" description="취향에 맞는 문제를 풀어볼 수 있어요." />
      <div className="h-except-banner w-[72%]">
        <div className="w-full h-full py-9 flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-3">
            <Search route="problems" />
            <ProblemFilter />
          </div>
          <Suspense>
            <ProblemList
              query={query as string | undefined}
              initialData={initialData as PageResponse<Problem>}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Problems;
