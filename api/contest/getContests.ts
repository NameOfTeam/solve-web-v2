"use server";

import solveAxios from "@/libs/axios/solveAxios";
import { BaseResponse } from "@/types/common/base";
import { PageResponse } from "@/types/common/page";
import { Contest } from "@/types/contest/contest";

export const getContests = async (page: number = 0, size: number = 20) => {
  try {
    const { data } = await solveAxios.get<BaseResponse<PageResponse<Contest>>>(
      `/contests`,
      {
        params: {
          page,
          size,
          sort: "id,desc"
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
