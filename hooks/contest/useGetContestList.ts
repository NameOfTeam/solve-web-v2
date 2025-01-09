import { ACCESS_TOKEN_KEY } from "@/constants/token";
import solveAxios from "@/libs/axios/solveAxios";
import { useContestFilterStore } from "@/stores/contest/useContestFilterStore";
import { BaseResponse } from "@/types/common/base";
import { PageResponse } from "@/types/common/page";
import { Contest } from "@/types/contest/contest";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useCookies } from "next-client-cookies";

const useGetContestList = ({
  page = 0,
  size = 15,
  query,
  options,
}: {
  page?: number;
  size?: number;
  query?: string;
  options?: UseQueryOptions<PageResponse<Contest>, Error>;
}) => {
  const { state } = useContestFilterStore();
  const cookies = useCookies();
  const accessToken = cookies.get(ACCESS_TOKEN_KEY);

  const fetchContestList = async () => {
    const params: Record<string, any> = {
      page,
      size,
    };

    if(state) {
      params.state = state;
    }

    if (query) {
      params.query = query;
    }

    const { data } = await solveAxios.get<BaseResponse<PageResponse<Contest>>>(
      "/contests/search",
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
    queryKey: ["contestList", { page, size, state, query }],
    queryFn: fetchContestList,
    ...options,
  });

  return data;
};

export default useGetContestList;
