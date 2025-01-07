import React from "react";
import WorkbookItem from "./WorkbookItem";
import { Workbook } from "@/types/workbook/workbook";

const ItemWrapper = ({ data }: { data: Workbook[] }) => {
  return (
    <div className="w-full flex flex-col gap-y-3">
      {data.map((item) => (
        <WorkbookItem key={item.id} data={item}/>
      ))}
    </div>
  );
};

export default ItemWrapper;
