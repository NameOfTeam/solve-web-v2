"use client"

import { useWorkbookFilterStore } from '@/stores/workbook/useWorkbookFilterStore';
import React from 'react'

const WorkbookFilter = () => {
  const { filter, setFilter } = useWorkbookFilterStore();
  
    return (
      <div className="flex font-[400] text-base text-main-container">
        <div
          className={`w-16 h-8 flex items-center justify-center  cursor-pointer box-content ${
            filter === null
              ? "border-secondary-700 border-b-[2px]"
              : "border-bg-border border-b"
          }`}
          onClick={() => setFilter(null)}
        >
          전체
        </div>
        <div
          className={`w-16 h-8 flex items-center justify-center cursor-pointer box-content ${
            filter === "POPULAR"
              ? "border-secondary-700 border-b-[2px]"
              : "border-bg-border border-b"
          }`}
          onClick={() => setFilter("POPULAR")}
        >
          인기순
        </div>
        <div
          className={`w-16 h-8 flex items-center justify-center border-b cursor-pointer box-content ${
            filter === "BOOKMARKED"
              ? "border-secondary-700 border-b-[2px]"
              : "border-bg-border border-b"
          }`}
          onClick={() => setFilter("BOOKMARKED")}
        >
          북마크
        </div>
      </div>
    );
}

export default WorkbookFilter