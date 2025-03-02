import { getWorkbookSearch } from "@/api/workbook/getWorkbookSearch";
import WorkbookList from "@/components/workbook/WorkbookList";
import { PageResponse } from "@/types/response/page";
import { Workbook } from "@/types/workbook/workbook";
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
    <WorkbookList
      initialData={initialData as PageResponse<Workbook>}
      query={query as string | undefined}
      filter={null}
    />
  );
};

export default Workbooks;
