import { getBoardSearch } from "@/api/board/getBoardSearch";
import { Board } from "@/types/board/board";
import { PageResponse } from "@/types/response/page";
import { defaultPageResponse } from "@/utils/defaultPageResponse";
import { useEffect, useState } from "react";

const useGetBoardList = (
  {
    page = 0,
    size = 15,
    query,
  }: {
    page?: number;
    size?: number;
    query?: string;
  },
  state: "FREE" | "NOTICE" | "QUESTION" | "SUGGESTION" | "INFORMATION" | null,
  initialData: PageResponse<Board>
) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PageResponse<Board>>(initialData);

  const fetchData = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await getBoardSearch(page, size, state, query);
      setData(response);
    } catch {
      setData(defaultPageResponse() as PageResponse<Board>);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, size, state, query]);

  return data;
};

export default useGetBoardList;
