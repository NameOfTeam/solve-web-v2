import React from "react";
import WorkbookItem from "../workbook/WorkbookItem";
import { Workbook } from "@/types/workbook/workbook";

const ItemWrapper = ({ data }: { data: Workbook[] }) => {
  return (
    <>
      {data.length > 0 ? (
        <div className="w-full flex flex-col gap-y-3 cursor-pointer">
          {data.map((item) => (
            <WorkbookItem key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <div className="w-full h-44 flex justify-center items-center bg-container rounded-lg">
          <p className="text-bg-border text-2xl">문제집이 없습니다.</p>
        </div>
      )}
    </>
  );
};

export default ItemWrapper;
