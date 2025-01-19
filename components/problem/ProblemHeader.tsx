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
import { saveCode } from "@/api/problem/saveCode";
import { useVisibilityStore } from "@/stores/problem/useVisibilityStore";

const ProblemHeader = () => {
  const router = useRouter();
  const { code } = useCodeStore();
  const { language } = useLanguageStore();
  const { setId: setRunId } = useRunSocketIdStore();
  const { setId: setSubmitId } = useSubmitSocketIdStore();
  const { running } = useRunningStore();
  const { problemId } = useParams();
  const { submitting, setSubmitting } = useSubmittingStore();
  const { visibility } = useVisibilityStore();
  const [saving, setSaving] = useState(false);

  const run = async () => {
    const socketId = await runCode(code, language);
    setRunId(socketId);
  };

  const stop = () => {
    setRunId(0);
  };

  const submit = async () => {
    if (problemId) {
      try {
        setSubmitting(true);
        const data = await submitCode(
          problemId as string,
          code,
          language,
          visibility
        );
        setSubmitId(data.id);
        setTimeout(() => {
          router.replace(`/solve/${problemId}/my-submits`);
        }, 100);
      } catch {
        setSubmitId(0);
        setSubmitting(false);
      }
    }
  };

  const save = async () => {
    if (problemId) {
      setSaving(true);
      const isSaved = await saveCode(problemId as string, code, language);
      console.log(isSaved);
      setSaving(false);
    }
  };

  return (
    <div className="w-full h-[72px] flex items-center gap-x-4 px-12 border-b border-bg-border bg-container justify-between">
      <div onClick={router.back} className="cursor-pointer">
        <ThemedIcon
          icon="arrow-left-back"
          width={40}
          height={40}
          variant="main"
          shade="container"
        />
      </div>
      <div className="flex gap-x-2">
        <button
          onClick={save}
          disabled={running || submitting || saving}
          className="px-4 py-2 rounded border-none outline-none bg-secondary-700 text-white cursor-pointer disabled:bg-secondary-100"
        >
          {saving ? "저장 중..." : "저장"}
        </button>
        <button
          onClick={running ? stop : run}
          disabled={submitting || saving}
          className="px-4 py-2 rounded border-none outline-none bg-secondary-700 text-white cursor-pointer disabled:bg-secondary-100"
        >
          {running ? "종료" : "실행"}
        </button>
        <button
          onClick={submit}
          disabled={running || submitting}
          className="px-4 py-2 rounded border-none outline-none bg-primary-700 text-white cursor-pointer disabled:bg-primary-100"
        >
          {submitting ? "채점 중..." : "제출"}
        </button>
      </div>
    </div>
  );
};

export default ProblemHeader;
