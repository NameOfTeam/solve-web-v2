import { getContestSearch } from "@/api/contest/getContestSearch";
import Banner from "@/components/ui/Banner";
import ContestFilter from "@/components/contest/ContestFilter";
import ContestList from "@/components/contest/ContestList";
import Search from "@/components/ui/Search";
import React, { Suspense } from "react";
import { PageResponse } from "@/types/response/page";
import { Contest } from "@/types/contest/contest";

const Contests = async ({
  searchParams,
}: {
  searchParams?:
    | Promise<{ [key: string]: string | string[] | undefined }>
    | undefined;
}) => {
  const query = (await searchParams)?.query;
  const initialData = await getContestSearch(0, 15, null, query as string);

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
          <Suspense>
            <ContestList
              query={query as string | undefined}
              initialData={initialData as PageResponse<Contest>}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Contests;
