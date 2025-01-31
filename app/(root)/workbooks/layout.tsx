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
      <div className="h-except-banner px-52">
        <div className="w-full h-full py-9 flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-3">
            <div className="w-[520px]">
              <Search route="workbooks" />
            </div>
            <WorkbookFilter />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default WorkbookLayout;
