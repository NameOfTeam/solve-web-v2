export interface BoardFilterState {
  state: null | "FREE" | "ANOUNCE" | "QUESTION" | "SUGGESTION" | "WRITE";
  setState: (
    state: null | "FREE" | "ANOUNCE" | "QUESTION" | "SUGGESTION" | "WRITE"
  ) => void;
}
