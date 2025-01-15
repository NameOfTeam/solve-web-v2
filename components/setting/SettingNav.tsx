"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SettingNav = () => {
  const [state, setState] = useState<"DISPLAY" | "LANGUAGE" | "PRIVACY">(
    "PRIVACY"
  );

  const route = useRouter();

  useEffect(() => route.push("/settings/privacy"), []);

  return (
    <div className="flex font-[400] text-base text-main-container">
      <div
        className={`h-8 flex items-center justify-center  cursor-pointer box-content px-4 ${
          state === "PRIVACY"
            ? "border-secondary-700 border-b-[2px]"
            : "border-bg-border border-b"
        }`}
        onClick={() => {
          if (state !== "PRIVACY") {
            route.push("/settings/privacy");
            setState("PRIVACY");
          }
        }}
      >
        <p>개인정보</p>
      </div>
      <div
        className={`h-8 flex items-center justify-center  cursor-pointer box-content px-4 ${
          state === "DISPLAY"
            ? "border-secondary-700 border-b-[2px]"
            : "border-bg-border border-b"
        }`}
        onClick={() => {
          if (state !== "DISPLAY") {
            route.push("/settings/display");
            setState("DISPLAY");
          }
        }}
      >
        <p>디스플레이</p>
      </div>
      <div
        className={`h-8 flex items-center justify-center  cursor-pointer box-content px-4 ${
          state === "LANGUAGE"
            ? "border-secondary-700 border-b-[2px]"
            : "border-bg-border border-b"
        }`}
        onClick={() => {
          if (state !== "LANGUAGE") {
            route.push("/settings/language");
            setState("LANGUAGE");
          }
        }}
      >
        <p>사용언어</p>
      </div>
    </div>
  );
};

export default SettingNav;
