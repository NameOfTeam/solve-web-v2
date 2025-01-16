import solveAxios from "@/libs/axios/solveAxios";
import { Comment } from "@/types/board/comment";
import { BaseResponse } from "@/types/response/base";
import { PageResponse } from "@/types/response/page";

export const getComments = async (postId: number) => {
  try {
    const { data } = await solveAxios.get<BaseResponse<PageResponse<Comment>>>(
      `/posts/${postId}/comments`,
      { params: { size: 1000 } }
    );
    return data.data;
  } catch {
    return;
  }
};
