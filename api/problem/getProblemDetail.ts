import solveAxios from "@/libs/axios/solveAxios";
import { Problem } from "@/types/problem/problem";
import { BaseResponse } from "@/types/response/base";

export const getProblemDetail = async (id: string) => {
  try {
    const { data } = await solveAxios<BaseResponse<Problem>>(`/problems/${id}`);
    if (data) {
      return data.data;
    }
  } catch {
    return;
  }
};
