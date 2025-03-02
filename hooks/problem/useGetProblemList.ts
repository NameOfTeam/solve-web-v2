import { getProblemSerch } from "@/api/problem/getProblemSearch";
import { useProblemFilterStore } from "@/stores/problem/useProblemFilterStore";
import { PageResponse } from "@/types/response/page";
import { Problem } from "@/types/problem/problem";
import { useEffect, useState } from "react";
import { defaultPageResponse } from "@/utils/defaultPageResponse";
import {startProgress, stopProgress} from "next-nprogress-bar";

const useGetProblemList = (
  {
    page = 0,
    size = 15,
    query,
  }: {
    page?: number;
    size?: number;
    query?: string;
  },
  initialData: PageResponse<Problem>
) => {
  const { states, order, tiers } = useProblemFilterStore();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PageResponse<Problem>>(
    initialData
  );

  const fetchData = async () => {
    setLoading(true);
    startProgress();
    try {
      const response = await getProblemSerch(
        page,
        size,
        states,
        order,
        tiers,
        query,
      );
      setData(response as PageResponse<Problem>);
    } catch {
      setData(defaultPageResponse() as PageResponse<Problem>);
    } finally {
      setLoading(false);
      stopProgress();
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, size, states, order, tiers, query]);

  return data;
};

export default useGetProblemList;
