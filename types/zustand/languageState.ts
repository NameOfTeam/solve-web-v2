export interface LanguageState {
  language: "PYTHON" | "NODE_JS" | "C" | "JAVA";
  setLanguage: (language: "PYTHON" | "NODE_JS" | "C" | "JAVA") => void;
}