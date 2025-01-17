import solveAxios from "@/libs/axios/solveAxios";
import { BaseResponse } from "@/types/response/base";

export const submitCode = async (
  problemId: string,
  code: string,
  language: string,
  visibility: string
) => {
  const { data } = await solveAxios.post<
    BaseResponse<{ id: number; result: string }>
  >(`/submits?problemId=${problemId}`, { code, language, visibility });
  return data.data;
};
