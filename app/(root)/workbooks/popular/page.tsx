import { getWorkbookSearch } from "@/api/workbook/getWorkbookSearch";
import WorkbookList from "@/components/workbook/WorkbookList";
import { PageResponse } from "@/types/response/page";
import { Workbook } from "@/types/workbook/workbook";
import React from "react";

const PopularWorkbooks = async ({
  searchParams,
}: {
  searchParams?:
    | Promise<{ [key: string]: string | string[] | undefined }>
    | undefined;
}) => {
  const query = (await searchParams)?.query;
  const initialData = await getWorkbookSearch(0, 15, "POPULAR", query as string);

  return (
    <WorkbookList
      initialData={initialData as PageResponse<Workbook>}
      query={query as string | undefined}
      filter="POPULAR"
    />
  );
};

export default PopularWorkbooks;
