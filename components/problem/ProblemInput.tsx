"use client";

import { WS_URL } from "@/constants/api";
import { useCodeStore } from "@/stores/problem/useCodeStore";
import { useRunningStore } from "@/stores/socket/useRunningStore";
import { useRunSocketIdStore } from "@/stores/socket/useRunSocketIdStore";
import { escaper } from "@/utils/escaper";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const ProblemInput = () => {
  const { id, setId } = useRunSocketIdStore();
  const socketClient = useRef<WebSocket | null>(null);
  const hasConnected = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [readOnly, setReadOnly] = useState(true);
  const { setRunning } = useRunningStore();
  const { setCode } = useCodeStore();
  const { problemId } = useParams();

  const send = () => {
    if (!input.trim()) return;

    const message = escaper(input);
    setLogs((prev) => [...prev, input]);
    socketClient.current?.send(
      JSON.stringify({
        type: "input",
        input: message,
      })
    );
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      e.preventDefault();
      send();
    }
  };

  useEffect(() => {
    setCode("");
  }, [problemId, setCode]);

  useEffect(() => {
    if (id === 0) {
      setRunning(false);
      hasConnected.current = false;
      return;
    }

    if (hasConnected.current) return;

    hasConnected.current = true;
    setLogs([]);
    socketClient.current = new WebSocket(`${WS_URL}/run/${id}`);

    socketClient.current.onopen = () => {
      setReadOnly(false);
      textareaRef.current?.focus();
      setLogs((prev) => [...prev, "프로세스가 시작되었습니다."]);
      setRunning(true);
    };

    socketClient.current.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data);
        if (data.type === "output") {
          setLogs((prev) => [...prev, data.content]);
        }
      } catch (error) {
        console.error("Error parsing message data:", error);
        console.log("Received data:", e.data);
      }
    };

    socketClient.current.onclose = () => {
      setRunning(false);
      setReadOnly(true);
      setLogs((prev) => [...prev, "프로세스가 종료되었습니다."]);
      setId(0);
      socketClient.current = null;
      hasConnected.current = false;
    };

    return () => {
      if (id !== 0) {
        socketClient.current?.close();
        socketClient.current = null;
        setRunning(false);
        setId(0);
        hasConnected.current = false;
      }
    };
  }, [id, setId, setRunning]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs, input]);

  const renderLogs = () =>
    logs.map((log, index) => (
      <div
        key={index}
        className={
          log === "프로세스가 시작되었습니다." ||
          log === "프로세스가 종료되었습니다."
            ? "text-info-700"
            : undefined
        }
      >
        {log}
      </div>
    ));

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full px-3 py-2 text-sm border-b border-bg-border">실행결과</div>
      <div
        ref={containerRef}
        className="w-full flex-1 bg-container text-main-container overflow-y-auto p-3 font-mono text-sm rounded-lg"
      >
        <pre className="whitespace-pre-wrap">{renderLogs()}</pre>
        <textarea
          className="w-full bg-container text-main-container mt-1 outline-none resize-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          ref={textareaRef}
          readOnly={readOnly}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default ProblemInput;
