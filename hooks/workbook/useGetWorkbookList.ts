import { getWorkbookSearch } from "@/api/workbook/getWorkbookSearch";
import { PageResponse } from "@/types/response/page";
import { Workbook } from "@/types/workbook/workbook";
import { defaultPageResponse } from "@/utils/defaultPageResponse";
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
  filter: "BOOKMARKED" | "POPULAR" | null,
  initialData: PageResponse<Workbook>
) => {
  const [data, setData] = useState<PageResponse<Workbook>>(initialData);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getWorkbookSearch(page, size, filter, query);
      setData(response as PageResponse<Workbook>);
    } catch {
      setData(defaultPageResponse() as PageResponse<Workbook>);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, size, filter, query]);

  return data;
};

export default useGetWorkbookList;
