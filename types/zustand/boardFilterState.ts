export interface BoardFilterState {
  state: null | "FREE" | "NOTICE" | "QUESTION" | "SUGGESTION" | "WRITE" | "INFORMATION";
  setState: (
    state: null | "FREE" | "NOTICE" | "QUESTION" | "SUGGESTION" | "WRITE" | "INFORMATION"
  ) => void;
}
