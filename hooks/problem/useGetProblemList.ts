import { fetchProblemList } from "@/api/problem/getProblemSearch";
import { ACCESS_TOKEN_KEY } from "@/constants/token";
import solveAxios from "@/libs/axios/solveAxios";
import { useProblemFilterStore } from "@/stores/problem/useProblemFilterStore";
import { BaseResponse } from "@/types/common/base";
import { PageResponse } from "@/types/common/page";
import { Problem } from "@/types/problem/problem";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useCookies } from "next-client-cookies";
import { useEffect, useState } from "react";

const useGetProblemList = (
  {
    page = 0,
    size = 15,
    query,
    options,
  }: {
    page?: number;
    size?: number;
    query?: string;
    options?: UseQueryOptions<PageResponse<Problem>, Error>;
  },
  initialData?: PageResponse<Problem>
) => {
  const { states, order, tiers } = useProblemFilterStore();
  const cookies = useCookies();
  const accessToken = cookies.get(ACCESS_TOKEN_KEY);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PageResponse<Problem> | null>(
    initialData || null
  );

  const fetchData = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await fetchProblemList(
        page,
        size,
        states,
        order,
        tiers,
        accessToken || undefined
      );
      setData(response);
    } catch {
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    fetchData();
  },[page, size, states, order, tiers, accessToken]);

  return data;
};

export default useGetProblemList;
