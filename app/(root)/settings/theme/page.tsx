"use client";

import ThemedIcon from "@/components/ui/ThemedIcon";
import useGetThemeList from "@/hooks/theme/useGetThemeList";
import { useUserStore } from "@/stores/user/useUserStore";
import { ThemeList } from "@/types/setting/themeSettings";
import React, { useState } from "react";

const Theme = () => {
  const [tierShow, setTierShow] = useState<
    "ALLSHOW" | "ALLHIDE" | "SOLVEDSHOW"
  >("ALLSHOW");

  const { user } = useUserStore();

  const themes = useGetThemeList();

  return (
    <div className="py-5 px-7 rounded-lg border-[1.2px] border-container-border flex flex-col gap-4 text-base font-semibold bg-container">
      <div className="flex flex-col gap-3">
        <p>Solve 테마 변경</p>
        <div className="w-1/2 min-w-96 h-12 relative">
          <input
            type="text"
            className="w-full -z-10 h-12 px-4 pr-12 items-center bg-bg border border-container-border rounded-lg font-normal focus:outline-none"
            placeholder="테마를 검색해보세요!"
          />
          <ThemedIcon
            icon="search"
            width={20}
            height={20}
            className="absolute right-4 top-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Theme;
