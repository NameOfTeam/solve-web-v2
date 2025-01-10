"use server";

import solveAxios from "@/libs/axios/solveAxios";
import { BaseResponse } from "@/types/common/base";
import { PageResponse } from "@/types/common/page";
import { Workbook } from "@/types/workbook/workbook";

export const getWorkbookSearch = async (
  page: number = 0,
  size: number = 15,
  filter: null | "POPULAR" | "BOOKMARKED",
  query?: string,
  accessToken?: string
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

  const { data } = await solveAxios.get<BaseResponse<PageResponse<Workbook>>>(
    "/workbooks/search",
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

  return data.data;
};
