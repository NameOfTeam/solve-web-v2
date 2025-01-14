import solveAxios from "@/libs/axios/solveAxios";
import { BaseResponse } from "@/types/response/base";
import { PageResponse } from "@/types/response/page";
import { Problem } from "@/types/problem/problem";
import { Tier } from "@/types/tier/tier";
import { defaultPageResponse } from "@/utils/defaultPageResponse";

export const getProblemSerch = async (
  page: number = 0,
  size: number = 15,
  states: string[],
  order: string,
  tiers: Tier[],
  query?: string
) => {
  const params: Record<string, any> = {
    order,
    page,
    size,
  };

  if (query) {
    params.query = query;
  }

  if (states.length > 0) {
    params.states = states;
  }

  if (tiers.length > 0) {
    params.tiers = tiers;
  }

  try {
    const { data } = await solveAxios.get<BaseResponse<PageResponse<Problem>>>(
      "/problems/search",
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
