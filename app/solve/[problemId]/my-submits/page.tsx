"use client";

import { WS_URL } from "@/constants/api";
import { useSubmitSocketIdStore } from "@/stores/socket/useSubmitSocketIdStore";
import { useSubmittingStore } from "@/stores/socket/useSubmittingStore";
import { ScoringData } from "@/types/problem/scoring";
import React, { useEffect, useRef, useState } from "react";

const MySubmits = () => {
  const { id, setId } = useSubmitSocketIdStore();
  const socketClient = useRef<WebSocket | null>(null);
  const { setSubmitting } = useSubmittingStore();
  const [newSubmit, setNewSubmit] = useState<ScoringData>();

  useEffect(() => {
    if (id !== 0) {
      socketClient.current = new WebSocket(`${WS_URL}/progress/${id}`);
      socketClient.current.onmessage = (e) => {
        try {
          const data: ScoringData = JSON.parse(e.data);
          setNewSubmit(data);
        } catch (error) {
          console.error("Error parsing message data:", error);
          console.log("Received data:", e.data);
        }
      };
      socketClient.current.onclose = () => {
        setSubmitting(false);
      };
    } else {
      if (socketClient.current?.CLOSED || socketClient.current?.CLOSING) {
        socketClient.current?.close();
        setId(0);
      }
    }
    return () => {
      socketClient.current?.close();
    };
  }, [id]);

  return (
    <div className="flex-1 bg-container border border-bg-border rounded-lg px-7 py-5 overflow-y-scroll">
      <div className="w-full px-4 pb-2 flex justify-between text-sm border-b border-bg-border">
        <p className="font-[400] text-bg-border">10개의 제출</p>
        <p className="font-[600] cursor-pointer">새로고침</p>
      </div>
      <div className="w-full h-9 flex items-center text-sm font-[600] border-b border-bg-border">
        <p className="flex-[8] px-4">상태</p>
        <p className="flex-1 px-4 text-center">언어</p>
        <p className="flex-1 px-4 text-center">메모리</p>
        <p className="flex-1 px-4 text-center">시간</p>
      </div>
      <div>
        <div>{newSubmit?.progress.toFixed()}%</div>
      </div>
    </div>
  );
};

export default MySubmits;
