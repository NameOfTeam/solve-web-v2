import { getProblemDetail } from "@/api/problem/getProblemDetail";
import Markdown from "@/components/editor/Markdown";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SolveDetail = async ({
  params,
}: {
  params: Promise<{ problemId: string }>;
}) => {
  const { problemId } = await params;
  const problemData = await getProblemDetail(problemId);

  return (
    <div className="flex-1 bg-container rounded-lg py-4 px-6 overflow-y-scroll">
      <div className="w-full flex items-center justify-between">
        <div className="flex gap-x-2 items-center font-[600] text-[26px]">
          <p>{problemData?.title}</p>
          <Image
            src={`/tiers/${problemData?.tier.toLowerCase()}.svg`}
            alt=""
            width={32}
            height={32}
          />
        </div>
        <p className="font-[400] text-xl flex items-center gap-x-1">
          <span className="text-lg">#</span> <span>{problemData?.id}</span>
        </p>
      </div>
      <div className="w-full py-6 flex flex-col gap-y-6">
        <div className="w-full flex flex-col gap-y-3">
          <p className="font-[600] text-2xl">본문</p>
          <Markdown content={problemData?.content || ""} />
        </div>
        <div className="w-full flex flex-col gap-y-3">
          <p className="font-[600] text-2xl">입력</p>
          <Markdown content={problemData?.input || ""} />
        </div>
        <div className="w-full flex flex-col gap-y-3">
          <p className="font-[600] text-2xl">출력</p>
          <Markdown content={problemData?.output || ""} />
        </div>
        <div className="w-full flex flex-col gap-y-3">
          <p className="font-[600] text-2xl">예시 입출력</p>
          {problemData?.examples.map((item, idx) => (
            <div key={idx} className="w-full flex flex-col gap-y-3 mb-4">
              <div className="w-full flex gap-3 flex-wrap">
                <div className="flex-1 min-w-52 border-bg-border border bg-bg">
                  <div className="w-full h-8 flex items-center border-b border-bg-border px-3 text-sm">
                    입력 {idx + 1}
                  </div>
                  <pre className="text-base leading-tight p-3">
                    {item.input}
                  </pre>
                </div>
                <div className="flex-1 min-w-52 border-bg-border border bg-bg">
                  <div className="w-full h-8 flex items-center border-b border-bg-border px-3 text-sm">
                    출력 {idx + 1}
                  </div>
                  <pre className="text-base leading-tight p-3">
                    {item.output}
                  </pre>
                </div>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col gap-y-3">
          <p className="font-[600] text-2xl">문제 분류</p>
          <ul className="list-disc list-inside">
            <li className="text-info-500">
              <Link href={`/problems?tag=dp`}>다이나믹 프로그래밍</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SolveDetail;
