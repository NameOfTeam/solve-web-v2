"use client"

import React, { useState } from 'react'
import WorkbookItem from './WorkbookItem';
import ThemedIcon from './ThemedIcon';
import useGetWorkbookList from '@/hooks/workbook/useGetWorkbookList';
import { PageResponse } from '@/types/common/page';
import { Workbook } from '@/types/workbook/workbook';

const WorkbookList = ({ initialData, query }: { initialData: PageResponse<Workbook>, query?: string }) => {
  const [page, setPage] = useState(0);
  const workbooks = useGetWorkbookList({ page, query }, initialData);

  const totalPages = workbooks?.totalPages || 0;
  const startPage = Math.max(0, page - 4);
  const endPage = Math.min(totalPages, startPage + 10);

  return (
    <>
      <div className="w-full py-6 flex flex-col gap-y-3">
        {workbooks && workbooks.content.length > 0 ? (
          workbooks.content.map((item) => (
            <WorkbookItem  data={item} key={item.id} />
          ))
        ) : (
          <div className="w-full h-72 flex items-center justify-center">
            <p className="text-2xl text-bg-border">등록된 대회가 없습니다.</p>
          </div>
        )}
      </div>
      <div className="w-full flex justify-center gap-x-3">
        <div
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          className={`w-10 h-10 flex justify-center items-center text-xl cursor-pointer ${
            page === 0 && "opacity-0"
          }`}
        >
          <ThemedIcon
            icon="arrow-left-back"
            width={32}
            height={32}
            variant="bg"
            shade="border"
          />
        </div>
        {Array.from({ length: endPage - startPage }).map((_, idx) => {
          const pageNumber = startPage + idx;
          return (
            <div
              key={pageNumber}
              onClick={() => setPage(pageNumber)}
              className={`w-10 h-10 rounded-full flex justify-center items-center text-xl cursor-pointer font-[400] ${
                page === pageNumber
                  ? "text-white bg-primary-600"
                  : "text-bg-border"
              }`}
            >
              {pageNumber + 1}
            </div>
          );
        })}
        <div
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
          className={`w-10 h-10 flex justify-center items-center text-xl cursor-pointer ${
            workbooks && page === totalPages - 1 && "opacity-0"
          }`}
        >
          <ThemedIcon
            icon="arrow-left-back"
            width={32}
            height={32}
            variant="bg"
            shade="border"
            className="rotate-180"
          />
        </div>
      </div>
    </>
  );
}

export default WorkbookList