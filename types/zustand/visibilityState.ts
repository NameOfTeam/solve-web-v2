export interface VisibilityState {
  visibility: "PUBLIC" | "PRIVATE";
  setVisibility: (visibility: "PUBLIC" | "PRIVATE") => void;
}