import solveAxios from "@/libs/axios/solveAxios";
import { Comment } from "@/types/board/comment";
import { BaseResponse } from "@/types/response/base";

export const getComments = async (postId: number) => {
  try {
    const { data } = await solveAxios.get<BaseResponse<Comment[]>>(
      `/posts/${postId}/comments`
    );
    return data.data;
  } catch {
    return;
  }
};
