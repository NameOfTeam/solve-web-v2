import { getBoardSearch } from "@/api/board/getBoardSearch";
import { useBoardFilterStore } from "@/stores/board/useBoardFilterStore";
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
  initialData: PageResponse<Board>
) => {
  const { state } = useBoardFilterStore();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PageResponse<Board>>(initialData);

  const fetchData = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await getBoardSearch(
        page,
        size,
        state as "FREE" | "ANOUNCE" | "QUESTION" | "SUGGESTION" | null,
        query
      );
      setData(response as PageResponse<Board>);
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
