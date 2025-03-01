"use client";

import { useUserStore } from "@/stores/user/useUserStore";
import { usePathname } from "next/navigation";
import Link from "next/link";

const WorkbookFilter = () => {
  const pathname = usePathname();
  const { user } = useUserStore();
  
  
  return (
    <div className="flex font-[400] text-base text-main-container">
      <Link
        href="/workbooks"
        className={`w-16 h-8 flex items-center justify-center cursor-pointer box-content ${
          pathname === "/workbooks"
            ? "border-secondary-700 border-b-[2px]"
            : "border-bg-border border-b"
        }`}
        replace
      >
        전체
      </Link>
      <Link
        href="/workbooks/popular"
        className={`w-16 h-8 flex items-center justify-center cursor-pointer box-content ${
          pathname === "/workbooks/popular"
            ? "border-secondary-700 border-b-[2px]"
            : "border-bg-border border-b"
        }`}
        replace
      >
        인기순
      </Link>
      {user?.id && (
        <Link
          href="/workbooks/bookmarked"
          className={`w-16 h-8 flex items-center justify-center border-b cursor-pointer box-content ${
            pathname === "/workbooks/bookmarked"
              ? "border-secondary-700 border-b-[2px]"
              : "border-bg-border border-b"
          }`}
          replace
        >
          북마크
        </Link>
      )}
    </div>
  );
};

export default WorkbookFilter;
