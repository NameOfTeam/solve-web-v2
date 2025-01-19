"use client";

import { useUserStore } from "@/stores/user/useUserStore";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const WorkbookFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useUserStore();

  useEffect(()=>{
    router.prefetch("/workbooks/popular");
    router.prefetch("/workbooks/bookmarked");
  },[router]);

  return (
    <div className="flex font-[400] text-base text-main-container">
      <div
        className={`w-16 h-8 flex items-center justify-center  cursor-pointer box-content ${
          pathname === "/workbooks"
            ? "border-secondary-700 border-b-[2px]"
            : "border-bg-border border-b"
        }`}
        onClick={() => router.replace("/workbooks")}
      >
        전체
      </div>
      <div
        className={`w-16 h-8 flex items-center justify-center cursor-pointer box-content ${
          pathname === "/workbooks/popular"
            ? "border-secondary-700 border-b-[2px]"
            : "border-bg-border border-b"
        }`}
        onClick={() => router.replace("/workbooks/popular")}
      >
        인기순
      </div>
      {user?.id && (
        <div
          className={`w-16 h-8 flex items-center justify-center border-b cursor-pointer box-content ${
            pathname === "/workbooks/bookmarked"
              ? "border-secondary-700 border-b-[2px]"
              : "border-bg-border border-b"
          }`}
          onClick={() => router.replace("/workbooks/bookmarked")}
        >
          북마크
        </div>
      )}
    </div>
  );
};

export default WorkbookFilter;
