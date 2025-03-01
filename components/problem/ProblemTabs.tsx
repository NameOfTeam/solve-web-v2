"use client";

import { useParams, usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

const ProblemTabs = () => {
  const { problemId } = useParams();
  const pathname = usePathname();
  
  return (
    <div className="w-full bg-container rounded-lg py-4 px-6 flex items-center gap-2 flex-wrap">
      <Link
        href={`/solve/${problemId}`}
        className={`px-4 py-2 rounded border text-sm cursor-pointer ${
          pathname === `/solve/${problemId}`
            ? "bg-secondary-600 border-secondary-600 text-white font-[600]"
            : "bg-container border-container-border text-container-border font-[600]"
        }`}
        replace
      >
        제출
      </Link>
      <Link
        href={`/solve/${problemId}/my-submits`}
        className={`px-4 py-2 rounded border text-sm cursor-pointer ${
          pathname === `/solve/${problemId}/my-submits`
            ? "bg-secondary-600 border-secondary-600 text-white font-[600]"
            : "bg-container border-container-border text-container-border font-[600]"
        }`}
        replace
      >
        내 제출
      </Link>
      <Link
        href={`/solve/${problemId}/status`}
        className={`px-4 py-2 rounded border text-sm cursor-pointer ${
          pathname === `/solve/${problemId}/status`
            ? "bg-secondary-600 border-secondary-600 text-white font-[600]"
            : "bg-container border-container-border text-container-border font-[600]"
        }`}
        replace
      >
        채점 현황
      </Link>
      <Link
        href={`/solve/${problemId}/boards`}
        className={`px-4 py-2 rounded border text-sm cursor-pointer ${
          pathname === `/solve/${problemId}/boards`
            ? "bg-secondary-600 border-secondary-600 text-white font-[600]"
            : "bg-container border-container-border text-container-border font-[600]"
        }`}
        replace
      >
        게시판
      </Link>
    </div>
  );
};

export default ProblemTabs;
