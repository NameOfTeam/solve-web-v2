import solveAxios from "@/libs/axios/solveAxios";
import { BaseResponse } from "@/types/response/base";

export const getSavedCode = async (
  problemId: string,
  language: "PYTHON" | "C" | "NODE_JS" | "JAVA"
) => {
  try {
    const { data } = await solveAxios.get<
      BaseResponse<{
        code: string;
        language: "PYTHON" | "C" | "NODE_JS" | "JAVA";
      }>
    >(`/problems/${problemId}/code/${language}`);
    return data.data;
  } catch {
    return {
      code: "",
      language: undefined
    };
  }
};
