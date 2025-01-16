import solveAxios from "@/libs/axios/solveAxios";
import { BaseResponse } from "@/types/response/base";

export const submitCode = async (
  problemId: string,
  code: string,
  language: string,
  visibility: string
) => {
  try {
    const { data } = await solveAxios.post<
      BaseResponse<{ id: number; result: string }>
    >(`/problems/${problemId}/submit`, { code, language, visibility });
    return data.data;
  } catch {
    return {
      id: 0,
    };
  }
};
