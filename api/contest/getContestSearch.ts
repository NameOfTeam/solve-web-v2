"use server";

import solveAxios from "@/libs/axios/solveAxios";
import { BaseResponse } from "@/types/response/base";
import { PageResponse } from "@/types/response/page";
import { Contest } from "@/types/contest/contest";
import { defaultPageResponse } from "@/utils/defaultPageResponse";

export const getContestSearch = async (
  page: number = 0,
  size: number = 15,
  state: null | "UPCOMING" | "ONGOING" | "ENDED",
  query?: string
) => {
  const params: Record<string, any> = {
    page,
    size,
  };

  if (state) {
    params.state = state;
  }

  if (query) {
    params.query = query;
  }

  try {
    const { data } = await solveAxios.get<BaseResponse<PageResponse<Contest>>>(
      "/contests/search",
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
