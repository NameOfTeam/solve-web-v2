import Link from "next/link";
import React from "react";

const HeaderExtension = () => {
  return (
    <div className="header-extension hidden w-[72vw] bg-container border-bg-border border border-t-2 border-t-primary-700 absolute top-[72px] z-[999999] hover:flex justify-between">
      <div className="flex flex-col gap-y-3 flex-1 border-r border-bg-border px-3 py-4 text-main-container">
        <h3 className="mb-2 text-base font-medium">문제들</h3>
        <Link href="/problems" className="hover:text-bg-border text-sm">
          전체 문제
        </Link>
        <Link href="/workbooks" className="hover:text-bg-border text-sm">
          문제집
        </Link>
        <Link href="/categories" className="hover:text-bg-border text-sm">
          분류
        </Link>
        <Link href="/ungraded" className="hover:text-bg-border text-sm">
          채점하지 않은 문제
        </Link>
      </div>

      <div className="flex flex-col gap-y-3 flex-1 border-r border-bg-border px-3 py-4">
        <h3 className="mb-2 text-base font-medium">대회</h3>
        <Link href="/official-contests" className="hover:text-bg-border text-sm">
          공식 대회
        </Link>
        <Link href="/club-contests" className="hover:text-bg-border text-sm">
          동아리 대회
        </Link>
      </div>

      <div className="flex flex-col gap-y-3 flex-1 border-r border-bg-border px-3 py-4">
        <h3 className="mb-2 text-base font-medium">상점</h3>
        <Link href="/usage-history" className="hover:text-bg-border text-sm">
          이용내역
        </Link>
        <Link href="/coin-shop" className="hover:text-bg-border text-sm">
          코인 상점
        </Link>
        <Link href="/limited-exchange" className="hover:text-bg-border text-sm">
          한정 교환소
        </Link>
        <Link href="/storage" className="hover:text-bg-border text-sm">
          보관소
        </Link>
      </div>

      <div className="flex flex-col gap-y-3 flex-1 px-3 py-4">
        <h3 className="mb-2 text-base font-medium">채점 현황</h3>
        <Link href="/judging-status" className="hover:text-bg-border text-sm">
          채점 현황
        </Link>
      </div>
    </div>
  );
};

export default HeaderExtension;
