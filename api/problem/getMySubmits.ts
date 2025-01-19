import solveAxios from "@/libs/axios/solveAxios";
import { SubmitData } from "@/types/problem/submit";
import { BaseResponse } from "@/types/response/base";

export const getMySubmits = async (problemId: string) => {
  try {
    const { data } = await solveAxios.get<BaseResponse<SubmitData[]>>(
      `/submits/my?problemId=${problemId}&cursorId=1`
    );
    return data.data;
  } catch {
    return [] as SubmitData[];
  }
};
