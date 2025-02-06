import Banner from "@/components/ui/Banner";
import Search from "@/components/ui/Search";
import WorkbookFilter from "@/components/workbook/WorkbookFilter";
import React, { PropsWithChildren, Suspense } from "react";

const WorkbookLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full">
      <Banner
        title="문제집"
        description="신선한 문제들을 풀어볼 수 있는 대회들이 열리는 곳이에요."
      />
      <div className="h-except-banner flex justify-center">
        <div className="w-[72%] h-full py-9 flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-3">
            <Search route="workbooks" />
            <WorkbookFilter />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default WorkbookLayout;
