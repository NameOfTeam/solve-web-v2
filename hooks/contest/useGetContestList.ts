import { getContestSearch } from "@/api/contest/getContestSearch";
import { ACCESS_TOKEN_KEY } from "@/constants/token";
import { useContestFilterStore } from "@/stores/contest/useContestFilterStore";
import { PageResponse } from "@/types/response/page";
import { Contest } from "@/types/contest/contest";
import { useCookies } from "next-client-cookies";
import { useEffect, useState } from "react";
import { defaultPageResponse } from "@/utils/defaultPageResponse";

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
  initialData: PageResponse<Contest>
) => {
  const { state } = useContestFilterStore();
  const [data, setData] = useState<PageResponse<Contest>>(
    initialData
  );
  const [loading, setLoading] = useState<boolean>(false);
  const tokenStore = useCookies();
  const accessToken = tokenStore.get(ACCESS_TOKEN_KEY);

  const fetchData = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await getContestSearch(
        page,
        size,
        state,
        query,
        accessToken || undefined
      );
      setData(response as PageResponse<Contest>);
    } catch {
      setData(defaultPageResponse() as PageResponse<Contest>);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, size, state, query, accessToken]);

  return data;
};

export default useGetContestList;
