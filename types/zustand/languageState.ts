import {Language} from "@/types/problem/language";

export interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
}