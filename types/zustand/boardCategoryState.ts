export interface BoardCategoryState {
  category: "FREE" | "QUESTION" | "SUGGESTION" | "INFORMATION";
  setCategory: (
    category: "FREE" | "QUESTION" | "SUGGESTION" | "INFORMATION"
  ) => void;
}
