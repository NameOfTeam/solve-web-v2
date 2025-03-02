import getThemeList from "@/api/setting/getThemeList";
import { ThemeList } from "@/types/setting/themeSettings";
import { tree } from "next/dist/build/templates/app-page";
import React, { useEffect, useState } from "react";

const useGetThemeList = (page: number, size: number, query?: string) => {
  const [data, setData] = useState<ThemeList[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await getThemeList(page, size, query);
      setData(response);
    } catch {
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, size, query]);

  return data;
};

export default useGetThemeList;
