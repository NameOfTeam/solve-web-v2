"use client";

import { getSavedCode } from "@/api/problem/getSavedCode";
import { CodeEditor } from "@/components/editor/CodeEditor";
import ProblemHeader from "@/components/problem/ProblemHeader";
import ProblemInput from "@/components/problem/ProblemInput";
import ProblemTabs from "@/components/problem/ProblemTabs";
import ProgressProvider from "@/components/provider/ProgressProvider";
import Dropdown from "@/components/ui/Dropdown";
import { useCodeStore } from "@/stores/problem/useCodeStore";
import { useLanguageStore } from "@/stores/problem/useLanguageStore";
import { useParams } from "next/navigation";
import React, {
  PropsWithChildren,
  useState,
  useEffect,
  useCallback,
} from "react";
import {getLanguageTemplate} from "@/api/problem/getLanguageTemplate";
import {startProgress, stopProgress} from "next-nprogress-bar";

const SolveLayout = ({ children }: PropsWithChildren) => {
  const [isResizing, setIsResizing] = useState(false);
  const [leftWidth, setLeftWidth] = useState(50);
  const { setCode } = useCodeStore();
  const { language, setLanguage } = useLanguageStore();

  const { problemId } = useParams();

  const getSave = async () => {
    startProgress()
    if (problemId) {
      const save = await getSavedCode(problemId as string, language);
      if (save.code && save.language) {
        setCode(save.code);
        setLanguage(save.language);
      } else {
        const template = await getLanguageTemplate(language);
        setCode(template);
      }
    }
    stopProgress()
  };

  useEffect(() => {
    getSave();
  }, [language]);

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
    <ProgressProvider>
      <div className="w-full h-screen bg-bg text-main-container">
        <ProblemHeader />
        <div className="flex w-full px-10 py-4 h-except-header">
          <div
            className="h-full min-w-80 flex flex-col gap-y-3 shrink-0"
            style={{ width: `${leftWidth}%` }}
          >
            <ProblemTabs />
            {children}
          </div>

          <div
            className="w-4 h-full flex items-center justify-center cursor-col-resize flex-shrink-0"
            onMouseDown={startResizing}
          >
            <div
              className={`w-[2px] h-8 transition-colors ${
                isResizing ? "bg-container-border" : "bg-bg-border"
              }`}
            ></div>
          </div>

          <div
            className="h-full w-full flex flex-col gap-y-3"
            style={{ width: `calc(${100 - leftWidth}% - 16px)` }}
          >
            <div className="flex-1 w-full rounded-lg bg-container overflow-hidden">
              <div className="px-2 py-2 flex gap-x-2">
                <Dropdown
                  data={[
                    { name: "Python", value: "PYTHON" },
                    { name: "Java", value: "JAVA" },
                    { name: "C", value: "C" },
                    { name: "Node.js", value: "NODE_JS" },
                    { name: "Kotlin", value: "KOTLIN" },
                    { name: "C++", value: "CPP" },
                    { name: "C#", value: "CSHARP" },
                    { name: "Swift", value: "SWIFT" },
                  ]}
                  defaultValue={language}
                  type="LANGUAGE"
                />
                <Dropdown
                  data={[
                    { name: "공개", value: "PUBLIC" },
                    { name: "비공개", value: "PRIVATE" },
                  ]}
                  defaultValue="PUBLIC"
                  type="VISIBILITY"
                />
              </div>
              <CodeEditor />
            </div>

            <div className="h-60 w-full rounded-lg bg-container">
              <ProblemInput />
            </div>

          </div>
        </div>
      </div>
    </ProgressProvider>
  );
};

export default SolveLayout;
