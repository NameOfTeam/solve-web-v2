"use client";

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const RankingFilter = () => {
  const pathname = usePathname();
  return (
    <div className="flex font-[400] text-base text-main-container">
      <Link
        href="/rankings"
        className={`h-8 flex items-center justify-center whitespace-nowrap cursor-pointer box-content px-4 ${
          pathname === "/rankings"
            ? "border-secondary-700 border-b-[2px] font-[600]"
            : "border-bg-border border-b"
        }`}
      >
        문제 해결
      </Link>
      <Link
        href="rankings/streak"
        className={`h-8 flex items-center justify-center whitespace-nowrap cursor-pointer box-content px-4 ${
          pathname === "/rankings/streak"
            ? "border-secondary-700 border-b-[2px] font-[600]"
            : "border-bg-border border-b"
        }`}
      >
        최장 스트릭
      </Link>
    </div>
  )
}

export default RankingFilter