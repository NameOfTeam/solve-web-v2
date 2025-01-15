import solveAxios from "@/libs/axios/solveAxios";
import { Comment } from "@/types/board/comment";
import { BaseResponse } from "@/types/response/base";

export const createComment = async (
  comment: { content: string },
  postId: number
) => {
  try {
    await solveAxios.post(`/posts/${postId}/comments`, comment);
    const { data } = await solveAxios.get<BaseResponse<Comment[]>>(
      `/posts/${postId}/comments`
    );
    if (data) {
      return data.data;
    }
  } catch {
    return;
  }
};
