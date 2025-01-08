"use server";

import { API_URL } from "@/constants/api";
import { BaseResponse } from "@/types/common/base";
import { Statistics } from "@/types/statistics/statistics";
import axios from "axios";

export const getStatistics = async () => {
  try {
    const { data } = await axios.get<BaseResponse<Statistics>>(
      `${API_URL}/statistics`
    );
    if (data) {
      return data.data;
    }
  } catch {
    return;
  }
};
