import { LanguageState } from "@/types/zustand/languageState";
import { create } from "zustand";

export const useLanguageStore = create<LanguageState>((set) => ({
  language: "PYTHON" as "PYTHON" | "NODE_JS" | "C" | "JAVA",
  setLanguage: (language) => set({ language }),
}));
