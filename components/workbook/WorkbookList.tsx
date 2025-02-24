"use client";

import React, { useState } from "react";
import WorkbookItem from "./WorkbookItem";
import useGetWorkbookList from "@/hooks/workbook/useGetWorkbookList";
import { PageResponse } from "@/types/response/page";
import { Workbook } from "@/types/workbook/workbook";
import PageController from "../ui/PageController";

const WorkbookList = ({
  initialData,
  filter,
  query,
}: {
  initialData: PageResponse<Workbook>;
  filter: null | "BOOKMARKED" | "POPULAR";
  query?: string;
}) => {
  const [page, setPage] = useState(0);
  const workbooks = useGetWorkbookList({ page, query }, filter, initialData);

  return (
    <>
      <div className="w-full py-6 flex flex-col gap-y-3">
        {workbooks && workbooks.content.length > 0 ? (
          workbooks.content.map((item) => (
            <WorkbookItem data={item} key={item.id} />
          ))
        ) : (
          <div className="w-full h-72 flex items-center justify-center bg-container rounded-lg">
            <p className="text-2xl text-bg-border">등록된 문제집이 없습니다.</p>
          </div>
        )}
      </div>
      <PageController page={page} setPage={setPage} data={workbooks} />
    </>
  );
};

export default WorkbookList;
