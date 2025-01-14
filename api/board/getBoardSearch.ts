import solveAxios from "@/libs/axios/solveAxios";
import { Board } from "@/types/board/board";
import { BaseResponse } from "@/types/response/base";
import { PageResponse } from "@/types/response/page";
import { defaultPageResponse } from "@/utils/defaultPageResponse";

export const getBoardSearch = async (
  page: number = 0,
  size: number = 15,
  state: null | "FREE" | "NOTICE" | "QUESTION" | "SUGGESTION" | "INFORMATION",
  query?: string,
) => {
  const params: Record<string, any> = {
    page,
    size,
  };

  if (state) {
    params.category = state;
  }

  if (query) {
    params.query = query;
  }

  try {
    const { data } = await solveAxios.get<BaseResponse<PageResponse<Board>>>(
      "/posts/search",
      {
        params,
        paramsSerializer: (params) => {
          return new URLSearchParams(params).toString();
        },
      }
    );

    return data.data;
  } catch {
    return defaultPageResponse();
  }
};
