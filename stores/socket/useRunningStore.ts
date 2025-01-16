import { RunningState } from "@/types/zustand/runningState";
import { create } from "zustand";

export const useRunningStore = create<RunningState>((set) => ({
  running: false,
  setRunning: (running: boolean) => set({ running }),
}));
