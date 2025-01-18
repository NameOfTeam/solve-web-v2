"use client";

import { getSavedCode } from "@/api/problem/getSavedCode";
import { CodeEditor } from "@/components/editor/CodeEditor";
import ProblemHeader from "@/components/problem/ProblemHeader";
import ProblemInput from "@/components/problem/ProblemInput";
import ProblemTabs from "@/components/problem/ProblemTabs";
import Dropdown from "@/components/ui/Dropdown";
import { useCodeStore } from "@/stores/problem/useCodeStore";
import { useLanguageStore } from "@/stores/problem/useLanguageStore";
import { useParams, useRouter } from "next/navigation";
import React, {
  PropsWithChildren,
  useState,
  useEffect,
  useCallback,
} from "react";

const SolveLayout = ({ children }: PropsWithChildren) => {
  const [isResizing, setIsResizing] = useState(false);
  const [leftWidth, setLeftWidth] = useState(50);
  const { setCode } = useCodeStore();
  const { language, setLanguage } = useLanguageStore();

  const router = useRouter();
  const { problemId } = useParams();

  const getSave = async () => {
    if (problemId) {
      const save = await getSavedCode(problemId as string, language);
      if(save.code && save.language) {
        setCode(save.code);
        setLanguage(save.language);
      }
    }
  };

  useEffect(() => {
    getSave();
  }, [language]);

  useEffect(() => {
    router.prefetch(`/solve/${problemId}/my-submits`);
    router.prefetch(`/solve/${problemId}/status`);
    router.prefetch(`/solve/${problemId}/boards`);
  }, [router]);

  const startResizing = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (e: MouseEvent) => {
      if (isResizing) {
        const container = document.querySelector(".h-except-header");
        if (container) {
          const containerRect = container.getBoundingClientRect();
          const newLeftWidth =
            ((e.clientX - containerRect.left) / containerRect.width) * 100;
          const clampedWidth = Math.min(Math.max(newLeftWidth, 30), 70);
          setLeftWidth(clampedWidth);
        }
      }
    },
    [isResizing]
  );

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", resize);
      window.addEventListener("mouseup", stopResizing);

      return () => {
        window.removeEventListener("mousemove", resize);
        window.removeEventListener("mouseup", stopResizing);
      };
    }
  }, [isResizing, resize, stopResizing]);

  return (
    <div className="w-full h-screen bg-bg text-main-container">
      <ProblemHeader />
      <div className="flex w-full px-12 py-4 h-except-header">
        <div
          className="h-full flex flex-col gap-y-4"
          style={{ width: `${leftWidth}%` }}
        >
          <ProblemTabs />
          {children}
        </div>
        <div
          className="w-6 h-full flex items-center justify-center cursor-col-resize"
          onMouseDown={startResizing}
        >
          <div
            className={`w-[2px] h-8 transition-colors ${
              isResizing ? "bg-bg-border" : "bg-container-border"
            }`}
          ></div>
        </div>
        <div
          className="h-full flex flex-col gap-y-4"
          style={{ width: `${100 - leftWidth}%` }}
        >
          <div className="flex-1 w-full rounded-lg bg-container border-bg-border border overflow-hidden">
            <div className="w-24 pl-3 py-2">
              <Dropdown
                data={[
                  { name: "Python", value: "PYTHON" },
                  { name: "Java", value: "JAVA" },
                  { name: "C", value: "C" },
                  { name: "Node.js", value: "NODE_JS" },
                ]}
                defaultValue={language}
                type="LANGUAGE"
                hideBorder={true}
              />
            </div>
            <CodeEditor />
          </div>
          <div className="h-60 w-full rounded-lg bg-container border-bg-border border">
            <ProblemInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolveLayout;
