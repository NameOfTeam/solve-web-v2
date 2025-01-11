import { getProblemSerch } from "@/api/problem/getProblemSearch";
import { ACCESS_TOKEN_KEY } from "@/constants/token";
import { useProblemFilterStore } from "@/stores/problem/useProblemFilterStore";
import { PageResponse } from "@/types/response/page";
import { Problem } from "@/types/problem/problem";
import { UseQueryOptions } from "@tanstack/react-query";
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
      const response = await getProblemSerch(
        page,
        size,
        states,
        order,
        tiers,
        query,
        accessToken || undefined
      );
      setData(response);
    } catch {
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, size, states, order, tiers, accessToken, query]);

  return data;
};

export default useGetProblemList;
