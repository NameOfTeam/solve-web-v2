import { getWorkbookSearch } from "@/api/workbook/getWorkbookSearch";
import { ACCESS_TOKEN_KEY } from "@/constants/token";
import { useWorkbookFilterStore } from "@/stores/workbook/useWorkbookFilterStore";
import { PageResponse } from "@/types/common/page";
import { Workbook } from "@/types/workbook/workbook";
import { useCookies } from "next-client-cookies";
import { useEffect, useState } from "react";

const useGetWorkbookList = (
  {
    page = 0,
    size = 15,
    query,
  }: {
    page?: number;
    size?: number;
    query?: string;
  },
  initialData?: PageResponse<Workbook>
) => {
  const { filter } = useWorkbookFilterStore();
  const [data, setData] = useState<PageResponse<Workbook> | null>(
    initialData || null
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
      const response = await getWorkbookSearch(
        page,
        size,
        filter,
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
  }, [page, size, filter, accessToken]);

  return data;
};

export default useGetWorkbookList;
