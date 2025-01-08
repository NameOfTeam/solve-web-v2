"use server";

import solveAxios from "@/libs/axios/solveAxios";
import { BaseResponse } from "@/types/common/base";
import { PageResponse } from "@/types/common/page";
import { Workbook } from "@/types/workbook/workbook";

export const getWorkbooks = async (page: number = 0, size: number = 20) => {
  try {
    const { data } = await solveAxios.get<BaseResponse<PageResponse<Workbook>>>(
      `/workbooks`,
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
