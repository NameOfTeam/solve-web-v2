"use server"

import solveAxios from "@/libs/axios/solveAxios";
import { BaseResponse } from "@/types/common/base";
import { PageResponse } from "@/types/common/page";
import { Contest } from "@/types/contest/contest";

export const getContestSearch = async (
  page: number = 0,
  size: number = 15,
  state: null | "UPCOMING" | "ONGOING" | "ENDED",
  query?: string,
  accessToken?: string
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

  const { data } = await solveAxios.get<BaseResponse<PageResponse<Contest>>>(
    "/contests/search",
    {
      params,
      paramsSerializer: (params) => {
        return new URLSearchParams(params).toString();
      },
      headers: accessToken
        ? {
            Authorization: `Bearer ${accessToken}`,
          }
        : {},
    }
  );

  return data.data
};
