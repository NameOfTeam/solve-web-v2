import solveAxios from "@/libs/axios/solveAxios";
import { BaseResponse } from "@/types/response/base";

export const runCode = async (code: string, language: string) => {
  try {
    const { data } = await solveAxios.post<BaseResponse<{ id: number }>>(
      "/runs",
      { code, language }
    );
    return data.data.id;
  } catch {
    return 0;
  }
};
