import solveAxios from "@/libs/axios/solveAxios";
import { Reply } from "@/types/board/reply";
import { BaseResponse } from "@/types/response/base";
import { PageResponse } from "@/types/response/page";

export const getReplies = async (postId: string, commentId: number) => {
  try {
    const { data } = await solveAxios.get<BaseResponse<PageResponse<Reply>>>(
      `/posts/${postId}/comments/${commentId}/replies`
    );
    if (data) {
      return data.data;
    }
  } catch {
    return;
  }
};
