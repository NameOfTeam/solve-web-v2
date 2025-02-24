import solveAxios from "@/libs/axios/solveAxios";
import { BaseResponse } from "@/types/response/base";
import { ThemeList, ThemeResponse } from "@/types/setting/themeSettings";
import React from "react";

const getThemeList = async (
  page: number = 0,
  size: number = 15,
  query?: string
) => {
  const params: Record<string, any> = {
    page,
    size,
  };

  if (query !== undefined) {
    params.query = query;
  }

  try {
    const { data } = await solveAxios.get<
      BaseResponse<ThemeResponse<ThemeList>>
    >("/themes", {
      params,
      paramsSerializer: (params) => {
        return new URLSearchParams(params).toString();
      },
    });

    return data.data.content;
  } catch {
    return [];
  }
};

export default getThemeList;
