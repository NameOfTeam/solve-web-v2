import { getWorkbookSearch } from "@/api/workbook/getWorkbookSearch";
import Banner from "@/components/ui/Banner";
import Search from "@/components/ui/Search";
import WorkbookFilter from "@/components/workbook/WorkbookFilter";
import WorkbookList from "@/components/workbook/WorkbookList";
import React, { Suspense } from "react";

const Workbooks = async ({
  searchParams,
}: {
  searchParams?:
    | Promise<{ [key: string]: string | string[] | undefined }>
    | undefined;
}) => {
  const query = (await searchParams)?.query;
  const initialData = await getWorkbookSearch(0, 15, null, query as string);

  return (
    <div className="w-full overflow-visible">
      <Banner
        title="문제집"
        description="신선한 문제들을 풀어볼 수 있는 대회들이 열리는 곳이에요."
      />
      <div className="h-except-banner px-52 overflow-visible">
        <div className="w-full h-full py-9 overflow-visible flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-3 overflow-visible">
            <div className="w-[520px]">
              <Search route="workbooks" />
            </div>
            <WorkbookFilter />
          </div>
          <Suspense>
            <WorkbookList
              initialData={initialData}
              query={query as string | undefined}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Workbooks;
