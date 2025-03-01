"use client";

import { WS_URL } from "@/constants/api";
import { useSubmitSocketIdStore } from "@/stores/socket/useSubmitSocketIdStore";
import { useSubmittingStore } from "@/stores/socket/useSubmittingStore";
import { SubmitData } from "@/types/problem/submit";
import { isWrongAnswer } from "@/utils/isWrongAnswer";
import { languageParser } from "@/utils/languageParser";
import { submitStatusParser } from "@/utils/submitStatusParser";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import useGetMySubmitList from "@/hooks/problem/useGetMySubmitList";
import {SubmitSocket} from "@/types/problem/submitSocket";
import {useSubmittedStore} from "@/stores/problem/useSubmittedStore";

const MySubmits = () => {
  const { id, setId } = useSubmitSocketIdStore();
  const socketClient = useRef<WebSocket | null>(null);
  const hasConnected = useRef(false);
  const { setSubmitting } = useSubmittingStore();
  const [newSubmit, setNewSubmit] = useState<SubmitSocket | null>(null);
  const [submits, setSubmits] = useState<SubmitData[]>([]);
  const { problemId } = useParams();
  const { ref, data } = useGetMySubmitList(problemId as string);
  const { submitted } = useSubmittedStore();
  

  useEffect(() => {
    if (id === 0) {
      setSubmitting(false);
      hasConnected.current = false;
      return;
    }

    if (hasConnected.current) return;

    hasConnected.current = true;
    socketClient.current = new WebSocket(`${WS_URL}/progress/${id}`);

    socketClient.current.onmessage = (e) => {
      try {
        const data: SubmitSocket = JSON.parse(e.data);
        if (
          data.result !== "JUDGING" &&
          data.result !== "PENDING" &&
          data.result !== "JUDGING_IN_PROGRESS"
        ) {
          if(submitted) setSubmits((prev) => [submitted, ...prev]);
          setNewSubmit(null);
          setId(0);
        } else {
          setNewSubmit(data);
        }
      } catch (error) {
        console.error("Error parsing message data:", error);
        console.log("Received data:", e.data);
      }
    };

    socketClient.current.onclose = () => {
      setSubmitting(false);
      socketClient.current = null;
      hasConnected.current = false;
    };

    return () => {
      if (id === 0) {
        socketClient.current?.close();
        socketClient.current = null;
        setSubmitting(false);
        hasConnected.current = false;
      }
    };
  }, [id, setId, setSubmitting]);

  return (
    <div className="flex-1 bg-container rounded-lg px-4 py-6 overflow-y-scroll">
      <div className="w-full px-4 pb-2 flex justify-between text-sm border-b border-bg-border">
        <p className="font-[400] text-bg-border">
          {`${submits.length + (newSubmit ? 1 : 0)}개의 제출`}
        </p>
        <p className="font-[600] cursor-pointer">새로고침</p>
      </div>

      <div className="w-full h-9 flex items-center text-sm font-[600] border-b border-bg-border whitespace-nowrap">
        <p className="flex-[8] px-4">상태</p>
        <p className="w-16 text-center">언어</p>
        <p className="w-16 text-center">메모리</p>
        <p className="w-16 text-center">시간</p>
      </div>

      {newSubmit && (
        <div className="w-full h-9 flex items-center text-sm font-[400] border-b border-bg-border">
          <p
            className={`flex-[8] pl-4 pr-2 ${
              newSubmit.result === "PENDING" ||
              newSubmit.result === "JUDGING" ||
              newSubmit.result === "JUDGING_IN_PROGRESS"
                ? ""
                : isWrongAnswer(newSubmit.result)
                ? "text-danger-300"
                : "text-secondary-500"
            }`}
          >
            {submitStatusParser(newSubmit.result)}
            {(newSubmit.result === "PENDING" ||
              newSubmit.result === "JUDGING" ||
              newSubmit.result === "JUDGING_IN_PROGRESS") &&
              `( ${newSubmit.progress.toFixed()}% )`}
          </p>
          <p className="flex-1 px-4 text-center">
            {submitted?.language ? languageParser(submitted.language) : ""}
          </p>
          <p className="flex-1 px-4 text-center">
            {submitted?.memoryUsage || ""}
            {submitted?.memoryUsage && "KB"}
          </p>
          <p className="flex-1 px-4 text-center">
            {submitted?.timeUsage || ""}
            {submitted?.timeUsage && "ms"}
          </p>
        </div>
      )}

      {submits.map((submit) => (
        <div className="w-full h-9 flex items-center text-sm font-[400] border-b border-bg-border whitespace-nowrap" key={submit.id}>
          <p
            className={`flex-[8] px-4 overflow-hidden text-ellipsis ${
              submit.result === "PENDING" ||
              submit.result === "JUDGING" ||
              submit.result === "JUDGING_IN_PROGRESS"
                ? ""
                : isWrongAnswer(submit.result)
                ? "text-danger-300"
                : "text-secondary-500"
            }`}
          >
            {submitStatusParser(submit.result)}
            ( 100% )
          </p>
          <p className="w-16 text-center">
            {submit.language ? languageParser(submit.language) : ""}
          </p>
          <p className="w-16 text-center">
            {submit.memoryUsage || ""}
            {submit.memoryUsage && "KB"}
          </p>
          <p className="w-16 text-center">
            {submit.timeUsage || ""}
            {submit.timeUsage && "ms"}
          </p>
        </div>
      ))}
      <div ref={ref} className="h-2" />
    </div>
  );
};

export default MySubmits;
