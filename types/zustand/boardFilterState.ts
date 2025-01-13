export interface BoardFilterState {
  state: null | "FREE" | "NOTICE" | "QUESTION" | "SUGGESTION" | "WRITE" | "INFO";
  setState: (
    state: null | "FREE" | "NOTICE" | "QUESTION" | "SUGGESTION" | "WRITE" | "INFO"
  ) => void;
}
