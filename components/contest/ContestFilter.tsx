"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const ContestFilter = () => {
  const pathname = usePathname();
  
  return (
    <div className="flex font-[400] text-base text-main-container">
      <Link
        href="/contests"
        className={`w-16 h-8 flex items-center justify-center cursor-pointer box-content ${
          pathname === "/contests"
            ? "border-secondary-700 border-b-[2px]"
            : "border-bg-border border-b"
        }`}
        replace
      >
        전체
      </Link>
      <Link
        href="/contests/upcoming"
        className={`w-16 h-8 flex items-center justify-center cursor-pointer box-content ${
          pathname === "/contests/upcoming"
            ? "border-secondary-700 border-b-[2px]"
            : "border-bg-border border-b"
        }`}
        replace
      >
        예정
      </Link>
      <Link
        href="/contests/ongoing"
        className={`w-16 h-8 flex items-center justify-center border-b cursor-pointer box-content ${
          pathname === "/contests/ongoing"
            ? "border-secondary-700 border-b-[2px]"
            : "border-bg-border border-b"
        }`}
        replace
      >
        진행중
      </Link>
      <Link
        href="/contests/ended"
        className={`w-16 h-8 flex items-center justify-center cursor-pointer box-content ${
          pathname === "/contests/ended"
            ? "border-secondary-700 border-b-[2px]"
            : "border-bg-border border-b"
        }`}
        replace
      >
        종료
      </Link>
    </div>
  );
};

export default ContestFilter;
