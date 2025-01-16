import { CodeState } from "@/types/zustand/codeState";
import { create } from "zustand";

export const useCodeStore = create<CodeState>((set) => ({
  code: "",
  setCode: (code) => set({ code }),
}));