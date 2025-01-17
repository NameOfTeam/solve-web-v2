import solveAxios from "@/libs/axios/solveAxios"
import { BaseResponse } from "@/types/response/base";

export const getSavedCode = async (problemId: string) => {
  try{
    const { data } = await solveAxios.get<BaseResponse<{ code: string, language: "PYTHON" | "C" | "NODE_JS" | "JAVA" }>>(`/problems/${problemId}/code`);
    return data.data;
  }catch{
    return {
      code: "",
      language: "PYTHON" as "PYTHON" | "C" | "NODE_JS" | "JAVA",
    };
  }
}