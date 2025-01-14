import solveAxios from "@/libs/axios/solveAxios";
import { BoardForm } from "@/types/board/boardForm";
import { BaseResponse } from "@/types/response/base";
import { PostResponse } from "@/types/response/postResponse";

export const createPost = async (form: BoardForm) => {
  try {
    const { data } = await solveAxios.post<BaseResponse<PostResponse>>("/posts", form);
    if(data) {
      return data.data.id;
    }
  } catch {
    return false;
  }
};
