import React from "react";

const SettingIndicator = ({
  value,
  condition,
}: {
  value: "ALLSHOW" | "ALLHIDE" | "SOLVEDSHOW";
  condition: "ALLSHOW" | "ALLHIDE" | "SOLVEDSHOW";
}) => {
  return (
    <div className="flex gap-2 items-center">
      <div
        className={`border-2 w-5 h-5 rounded-full flex items-center justify-center ${
          value === condition
            ? "border-primary-700"
            : "border-container-border bg-container-border"
        }`}
      >
        <div
          className={`border-[1.2px] rounded-full w-[10px] h-[10px] ${
            value === condition
              ? "border-primary-700 bg-primary-700"
              : "border-container-border bg-container-border"
          }`}
        ></div>
      </div>
      <p className=" font-normal">전체 표시</p>
    </div>
  );
};

export default SettingIndicator;
