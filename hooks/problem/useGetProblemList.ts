import { ACCESS_TOKEN_KEY } from "@/constants/token";
import solveAxios from "@/libs/axios/solveAxios";
import { useProblemFilterStore } from "@/stores/problem/useProblemFilterStore";
import { BaseResponse } from "@/types/common/base";
import { PageResponse } from "@/types/common/page";
import { Problem } from "@/types/problem/problem";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useCookies } from "next-client-cookies";

const useGetProblemList = ({
  page = 0,
  size = 15,
  query,
  options,
}: {
  page?: number;
  size?: number;
  query?: string;
  options?: UseQueryOptions<PageResponse<Problem>, Error>;
}) => {
  const { states, order, tiers } = useProblemFilterStore();
  const cookies = useCookies();
  const accessToken = cookies.get(ACCESS_TOKEN_KEY);

  const fetchProblemList = async () => {
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

    if (data && data.data) {
      return data.data;
    }

    throw new Error("Failed to fetch problem list");
  };

  const { data } = useQuery({
    queryKey: ["problemList", { page, size, states, tiers, order, query }],
    queryFn: fetchProblemList,
    ...options,
  });

  return data;
};

export default useGetProblemList;
