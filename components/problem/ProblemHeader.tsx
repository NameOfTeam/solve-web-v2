"use client";

import React, { useState } from "react";
import ThemedIcon from "../ui/ThemedIcon";
import { useParams, useRouter } from "next/navigation";
import { useCodeStore } from "@/stores/problem/useCodeStore";
import { useLanguageStore } from "@/stores/problem/useLanguageStore";
import { runCode } from "@/api/problem/runCode";
import { useRunSocketIdStore } from "@/stores/socket/useRunSocketIdStore";
import { useRunningStore } from "@/stores/socket/useRunningStore";
import { submitCode } from "@/api/problem/submitCode";
import { useSubmitSocketIdStore } from "@/stores/socket/useSubmitSocketIdStore";
import { useSubmittingStore } from "@/stores/socket/useSubmittingStore";

const ProblemHeader = () => {
  const router = useRouter();
  const { code } = useCodeStore();
  const { language } = useLanguageStore();
  const { setId: setRunId } = useRunSocketIdStore();
  const { setId: setSubmitId } = useSubmitSocketIdStore();
  const { running } = useRunningStore();
  const { problemId } = useParams();
  const { submitting, setSubmitting } = useSubmittingStore();

  const run = async () => {
    const socketId = await runCode(code, language);
    setRunId(socketId);
  };

  const stop = () => {
    setRunId(0);
  };

  const submit = async () => {
    if (problemId) {
      setSubmitting(true);
      const data = await submitCode(
        problemId as string,
        code,
        language,
        "PUBLIC"
      );
      setSubmitId(data.id);
      router.replace(`/solve/${problemId}/my-submits`);
    }
  };

  return (
    <div className="w-full h-[72px] flex items-center gap-x-4 px-12 border-b border-bg-border bg-container">
      <div onClick={router.back} className="cursor-pointer">
        <ThemedIcon
          icon="arrow-left-back"
          width={40}
          height={40}
          variant="main"
          shade="container"
        />
      </div>
      <button onClick={running ? stop : run}>
        {running ? "종료" : "실행"}
      </button>
      <button onClick={submit} disabled={running || submitting}>
        {submitting ? "채점 중..." : "제출"}
      </button>
    </div>
  );
};

export default ProblemHeader;
