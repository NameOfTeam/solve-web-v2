import { getContestSearch } from "@/api/contest/getContestSearch";
import { useContestFilterStore } from "@/stores/contest/useContestFilterStore";
import { PageResponse } from "@/types/response/page";
import { Contest } from "@/types/contest/contest";
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
  }, [page, size, state, query]);

  return data;
};

export default useGetContestList;
