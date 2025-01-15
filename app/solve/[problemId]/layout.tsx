import { getProblemDetail } from "@/api/problem/getProblemDetail";
import ProblemHeader from "@/components/problem/ProblemHeader";
import ProblemTabs from "@/components/problem/ProblemTabs";
import { Tier } from "@/types/tier/tier";
import React, { PropsWithChildren } from "react";

interface SolveLayoutProps extends PropsWithChildren {
  params: Promise<{ problemId: string }>;
}

const SolveLayout = async ({ children, params }: SolveLayoutProps) => {
  const { problemId } = await params;
  const problemData = await getProblemDetail(problemId);

  return (
    <div className="w-full h-screen bg-bg text-main-container">
      <ProblemHeader
        title={problemData?.title}
        tier={problemData?.tier as Tier}
        problemId={problemData?.id}
      />
      <ProblemTabs />
      <div>{problemData?.title}</div>
      <div>{children}</div>
    </div>
  );
};

export default SolveLayout;
