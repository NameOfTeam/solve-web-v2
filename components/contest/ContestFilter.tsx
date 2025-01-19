"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ContestFilter = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    router.prefetch("/contests/upcoming");
    router.prefetch("/contests/ongoing");
    router.prefetch("/contests/ended");
  }, [router]);

  return (
    <div className="flex font-[400] text-base text-main-container">
      <div
        className={`w-16 h-8 flex items-center justify-center  cursor-pointer box-content ${
          pathname === "/contests"
            ? "border-secondary-700 border-b-[2px]"
            : "border-bg-border border-b"
        }`}
        onClick={() => router.replace("/contests")}
      >
        전체
      </div>
      <div
        className={`w-16 h-8 flex items-center justify-center cursor-pointer box-content ${
          pathname === "/contests/upcoming"
            ? "border-secondary-700 border-b-[2px]"
            : "border-bg-border border-b"
        }`}
        onClick={() => router.replace("/contests/upcoming")}
      >
        예정
      </div>
      <div
        className={`w-16 h-8 flex items-center justify-center border-b cursor-pointer box-content ${
          pathname === "/contests/ongoing"
            ? "border-secondary-700 border-b-[2px]"
            : "border-bg-border border-b"
        }`}
        onClick={() => router.replace("/contests/ongoing")}
      >
        진행중
      </div>
      <div
        className={`w-16 h-8 flex items-center justify-center cursor-pointer box-content ${
          pathname === "/contests/ended"
            ? "border-secondary-700 border-b-[2px]"
            : "border-bg-border border-b"
        }`}
        onClick={() => router.replace("/contests/ended")}
      >
        종료
      </div>
    </div>
  );
};

export default ContestFilter;
