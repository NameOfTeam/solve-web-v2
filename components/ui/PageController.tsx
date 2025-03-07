import React, { Dispatch, SetStateAction } from "react";
import ThemedIcon from "./ThemedIcon";
import { PageResponse } from "@/types/response/page";
import { Workbook } from "@/types/workbook/workbook";
import { Problem } from "@/types/problem/problem";
import { Contest } from "@/types/contest/contest";
import { Board } from "@/types/board/board";

const PageController = ({
  page,
  setPage,
  data,
}: {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  data: PageResponse<Workbook | Problem | Contest | Board>;
}) => {
  const totalPages = data.totalPages || 0;
  let startPage = Math.max(0, page - 4);

  if (totalPages > 10 && page >= totalPages - 5) {
    startPage = totalPages - 10;
  }

  startPage = Math.max(0, startPage);

  const endPage = Math.min(totalPages, startPage + 10);
  return (
    <div className="w-full flex justify-center items-center gap-x-3">
      <div
        onClick={() => setPage((prev) => Math.max(prev - 10, 0))}
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
            onClick={() => 
              setPage(pageNumber)
            }
            className={`w-10 rounded-full flex justify-center items-center text-xl cursor-pointer font-[400] aspect-square flex-shrink-0 max-md:w-7 max-md:h-7 max-md:text-lg hover:bg-container ${
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
        onClick={() => setPage((prev) => Math.min(prev + 10, totalPages - 1))}
        className={`w-10 h-10 flex justify-center items-center text-xl cursor-pointer ${
          data && page === totalPages - 1 && "opacity-0"
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
  );
};

export default PageController;
