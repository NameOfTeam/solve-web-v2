import solveAxios from "@/libs/axios/solveAxios";
import { Reply } from "@/types/board/reply";
import { BaseResponse } from "@/types/response/base";

export const getReplies = async (postId: string, commentId: number) => {
  try {
    const { data } = await solveAxios.get<BaseResponse<Reply[]>>(
      `/posts/${postId}/comments/${commentId}/replies`
    );
    if (data) {
      return data.data;
    }
  } catch {
    return;
  }
};
