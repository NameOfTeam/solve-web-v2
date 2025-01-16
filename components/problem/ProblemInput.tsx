"use client";

import { WS_URL } from "@/constants/api";
import { useRunningStore } from "@/stores/socket/useRunningStore";
import { useRunSocketIdStore } from "@/stores/socket/useRunSocketIdStore";
import { escaper } from "@/utils/escaper";
import React, { useEffect, useRef, useState } from "react";

const ProblemInput = () => {
  const { id, setId } = useRunSocketIdStore();
  const socketClient = useRef<WebSocket | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [readOnly, setReadOnly] = useState(true);
  const { setRunning } = useRunningStore();

  const send = () => {
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

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (id !== 0) {
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
          } else if (
            data.type === "status" &&
            data.content === "Execution completed"
          ) {
            setLogs((prev) => [...prev, "프로세스가 종료되었습니다."]);
            setReadOnly(true);
          }
        } catch (error) {
          console.error("Error parsing message data:", error);
          console.log("Received data:", e.data);
        }
      };
      socketClient.current.onclose = () => {
        setRunning(false);
        setReadOnly(true);
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

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs, input]);

  const renderLogs = () =>
    logs.map((log, index) => {
      const isInfoMessage =
        log === "프로세스가 시작되었습니다." ||
        log === "프로세스가 종료되었습니다.";
      return (
        <div
          key={index}
          className={isInfoMessage ? "text-info-700" : undefined}
        >
          {log}
        </div>
      );
    });

  return (
    <div
      ref={containerRef}
      className="w-full h-full bg-container text-main-container overflow-y-auto p-3 font-mono text-sm rounded-lg"
    >
      <pre className="whitespace-pre-wrap">{renderLogs()}</pre>

      <textarea
        className="w-full bg-container text-main-container mt-1 outline-none resize-none"
        value={input}
        onChange={onChange}
        ref={textareaRef}
        readOnly={readOnly}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.nativeEvent.isComposing) {
            e.preventDefault();
            send();
          }
        }}
      />
    </div>
  );
};

export default ProblemInput;
