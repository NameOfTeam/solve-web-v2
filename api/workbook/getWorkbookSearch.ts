"use server";

import solveAxios from "@/libs/axios/solveAxios";
import { BaseResponse } from "@/types/response/base";
import { PageResponse } from "@/types/response/page";
import { Workbook } from "@/types/workbook/workbook";
import { defaultPageResponse } from "@/utils/defaultPageResponse";

export const getWorkbookSearch = async (
  page: number = 0,
  size: number = 15,
  filter: null | "POPULAR" | "BOOKMARKED",
  query?: string
) => {
  const params: Record<string, any> = {
    page,
    size,
  };

  if (filter) {
    params.filter = filter;
  }

  if (query) {
    params.query = query;
  }

  try {
    const { data } = await solveAxios.get<BaseResponse<PageResponse<Workbook>>>(
      "/workbooks/search",
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
