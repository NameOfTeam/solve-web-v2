import solveAxios from "@/libs/axios/solveAxios";
import { BaseResponse } from "@/types/response/base";
import {Language} from "@/types/problem/language";

export const getSavedCode = async (
  problemId: string,
  language: Language
) => {
  try {
    const { data } = await solveAxios.get<
      BaseResponse<{
        code: string;
        language: Language
      }>
    >(`/problems/${problemId}/code?language=${language}`);
    return data.data;
  } catch {
    return {
      code: "",
      language: undefined
    };
  }
};
