import solveAxios from "@/libs/axios/solveAxios"
import { Board } from "@/types/board/board";
import { BaseResponse } from "@/types/response/base";

export const getPostDetail = async (postId: string) => {
  try{
    const { data } = await solveAxios.get<BaseResponse<Board>>(`/posts/${postId}`);
    if(data){
      return data.data
    }
  }catch{
    return;
  }
}