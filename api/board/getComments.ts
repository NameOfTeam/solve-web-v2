import solveAxios from "@/libs/axios/solveAxios";
import { Comment } from "@/types/board/comment";
import { BaseResponse } from "@/types/response/base";
import { PageResponse } from "@/types/response/page";

export const getComments = async (
  postId: number,
  cursorId: number | undefined
) => {
  try {
    const { data } = await solveAxios.get<BaseResponse<Comment[]>>(
      `/posts/${postId}/comments`,
      { params: { postId: postId, cursorId: cursorId } }
    );
    return data.data;
  } catch {
    return [];
  }
};
