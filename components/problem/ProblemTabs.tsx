"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";

const ProblemTabs = () => {
  const router = useRouter();
  const { problemId } = useParams();
  const pathname = usePathname();

  return (
    <div className="w-full border border-bg-border bg-container rounded-lg py-4 px-7 flex items-center gap-x-4">
      <div
        className={`px-4 py-2 rounded border text-base cursor-pointer ${
          pathname === `/solve/${problemId}`
            ? "bg-secondary-600 border-secondary-600 text-white font-[600]"
            : "bg-container border-container-border text-container-border font-[600]"
        }`}
        onClick={() => router.replace(`/solve/${problemId}`)}
      >
        제출
      </div>
      <div
        className={`px-4 py-2 rounded border text-base cursor-pointer ${
          pathname === `/solve/${problemId}/my-submits`
            ? "bg-secondary-600 border-secondary-600 text-white font-[600]"
            : "bg-container border-container-border text-container-border font-[600]"
        }`}
        onClick={() => router.replace(`/solve/${problemId}/my-submits`)}
      >
        내 제출
      </div>
      <div
        className={`px-4 py-2 rounded border text-base cursor-pointer ${
          pathname === `/solve/${problemId}/status`
            ? "bg-secondary-600 border-secondary-600 text-white font-[600]"
            : "bg-container border-container-border text-container-border font-[600]"
        }`}
        onClick={() => router.replace(`/solve/${problemId}/status`)}
      >
        채점 현황
      </div>
      <div
        className={`px-4 py-2 rounded border text-base cursor-pointer ${
          pathname === `/solve/${problemId}/boards`
            ? "bg-secondary-600 border-secondary-600 text-white font-[600]"
            : "bg-container border-container-border text-container-border font-[600]"
        }`}
        onClick={() => router.replace(`/solve/${problemId}/boards`)}
      >
        게시판
      </div>
    </div>
  );
};

export default ProblemTabs;
