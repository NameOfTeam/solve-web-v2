import solveAxios from "@/libs/axios/solveAxios";
import { BaseResponse } from "@/types/response/base";
import {SubmitData} from "@/types/problem/submit";

export const submitCode = async (
  problemId: string,
  code: string,
  language: string,
  visibility: string
) => {
  const { data } = await solveAxios.post<
    BaseResponse<SubmitData>
  >(`/submits?problemId=${problemId}`, { code, language, visibility });
  return data.data;
};
