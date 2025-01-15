"use client";

import { Tier } from "@/types/tier/tier";
import React from "react";
import ThemedIcon from "../ui/ThemedIcon";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ProblemHeader = ({
  problemId,
  title,
  tier,
}: {
  problemId?: number;
  title?: string;
  tier?: Tier;
}) => {
  const router = useRouter();

  return (
    <div className="w-full h-[72px] flex items-center gap-x-4 px-12">
      <div onClick={router.back} className="cursor-pointer">
        <ThemedIcon
          icon="arrow-left-back"
          width={40}
          height={40}
          variant="main"
          shade="container"
        />
      </div>
      <div className="text-[22px] font-[600] flex gap-x-3">
        <span>{`# ${problemId}`}</span>
        <span>・</span>
        <Image
          src={`/tiers/${tier?.toLowerCase()}.svg`}
          alt=""
          width={24}
          height={24}
        />
        <span>{title}</span>
      </div>
    </div>
  );
};

export default ProblemHeader;
