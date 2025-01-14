export interface BoardForm {
  title: string;
  content: string;
  category: "FREE" | "QUESTION" | "SUGGESTION" | "INFORMATION",
  problemId: string;
}