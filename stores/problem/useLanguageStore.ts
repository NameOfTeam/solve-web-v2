import { LanguageState } from "@/types/zustand/languageState";
import { create } from "zustand";
import {Language} from "@/types/problem/language";

export const useLanguageStore = create<LanguageState>((set) => ({
  language: "PYTHON" as Language,
  setLanguage: (language) => set({ language }),
}));
