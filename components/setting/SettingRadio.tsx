"use client";

import React, { Dispatch, SetStateAction } from "react";

const SettingRadio = ({
  value,
  condition,
  name,
  setValue,
}: {
  value: "ALLSHOW" | "ALLHIDE" | "SOLVEDSHOW";
  condition: "ALLSHOW" | "ALLHIDE" | "SOLVEDSHOW";
  name: string;
  setValue: Dispatch<SetStateAction<"ALLSHOW" | "ALLHIDE" | "SOLVEDSHOW">>;
}) => {
  return (
    <div
      className="flex gap-2 items-center w-auto"
      onClick={() => {
        setValue(condition);
      }}
    >
      <div
        className={`border-2 w-5 h-5 rounded-full flex items-center justify-center ${
          value === condition
            ? "border-secondary-600"
            : "border-container-border"
        }`}
      >
        <div
          className={`border-[1.2px] rounded-full w-[10px] h-[10px] ${
            value === condition
              ? "border-secondary-600 bg-secondary-600"
              : "border-container-border bg-container-border"
          }`}
        ></div>
      </div>
      <p className=" font-normal">{name}</p>
    </div>
  );
};

export default SettingRadio;
