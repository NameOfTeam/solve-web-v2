import { fetchContestList } from "@/api/contest/getContestSearch";
import { ACCESS_TOKEN_KEY } from "@/constants/token";
import { useContestFilterStore } from "@/stores/contest/useContestFilterStore";
import { PageResponse } from "@/types/common/page";
import { Contest } from "@/types/contest/contest";
import { useCookies } from "next-client-cookies";
import { useEffect, useState } from "react";

const useGetContestList = (
  {
    page = 0,
    size = 15,
    query,
  }: {
    page?: number;
    size?: number;
    query?: string;
  },
  initialData?: PageResponse<Contest>
) => {
  const { state } = useContestFilterStore();
  const [data, setData] = useState<PageResponse<Contest> | null>(initialData || null);
  const [loading, setLoading] = useState<boolean>(false);
  const tokenStore = useCookies();
  const accessToken = tokenStore.get(ACCESS_TOKEN_KEY);

  const fetchData = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await fetchContestList(
        page,
        size,
        state,
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
  }, [page, size, state, accessToken]);

  return data;
};

export default useGetContestList;
