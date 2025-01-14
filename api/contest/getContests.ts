"use server"

import solveAxios from "@/libs/axios/solveAxios";
import { BaseResponse } from "@/types/response/base";
import { PageResponse } from "@/types/response/page";
import { Contest } from "@/types/contest/contest";

export const getContests = async (page: number = 0, size: number = 15) => {
  try {
    const { data } = await solveAxios.get<BaseResponse<PageResponse<Contest>>>(
      `/contests`,
      {
        params: {
          page,
          size,
        },
      }
    );
    if (data) {
      return data.data.content;
    }
  } catch {
    return;
  }
};
