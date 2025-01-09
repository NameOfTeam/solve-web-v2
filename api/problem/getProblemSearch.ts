import solveAxios from "@/libs/axios/solveAxios";
import { BaseResponse } from "@/types/common/base";
import { PageResponse } from "@/types/common/page";
import { Problem } from "@/types/problem/problem";
import { Tier } from "@/types/tier/tier";

export const fetchProblemList = async (
  page: number = 0,
  size: number = 15,
  states: string[],
  order: string,
  tiers: Tier[],
  query?: string,
  accessToken?: string
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

  const { data } = await solveAxios.get<BaseResponse<PageResponse<Problem>>>(
    "/problems/search",
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
