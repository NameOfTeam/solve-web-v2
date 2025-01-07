"use server";

import { API_URL } from "@/constants/api";
import { BaseResponse } from "@/types/common/base";
import { PageResponse } from "@/types/common/page";
import { Contest } from "@/types/contest/contest";
import axios from "axios";

export const getContests = async (page: number = 0, size: number = 20) => {
  try {
    const { data } = await axios.get<BaseResponse<PageResponse<Contest>>>(
      `${API_URL}/contests`,
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
