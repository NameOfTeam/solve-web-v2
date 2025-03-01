import {Language} from "@/types/problem/language";
import solveAxios from "@/libs/axios/solveAxios";
import {BaseResponse} from "@/types/response/base";

export const getLanguageTemplate = async (language: Language) => {
  try{
    const { data } = await solveAxios.get<BaseResponse<string>>(`/templates/${language}`);
    return data.data;
  }catch{
    return "";
  }
}