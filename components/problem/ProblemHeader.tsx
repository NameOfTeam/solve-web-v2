"use client";

import React from "react";
import ThemedIcon from "../ui/ThemedIcon";
import { useRouter } from "next/navigation";
import { useCodeStore } from "@/stores/problem/useCodeStore";

const ProblemHeader = () => {
  const router = useRouter();
  const { code } = useCodeStore();

  return (
    <div className="w-full h-[72px] flex items-center gap-x-4 px-12 border-b border-bg-border bg-container">
      <div onClick={router.back} className="cursor-pointer">
        <ThemedIcon
          icon="arrow-left-back"
          width={40}
          height={40}
          variant="main"
          shade="container"
        />
      </div>
    </div>
  );
};

export default ProblemHeader;
