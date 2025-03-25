import { getUsers } from '@/api/user/getUsers';
import { PageResponse } from '@/types/response/page';
import { User } from '@/types/user/user';
import { defaultPageResponse } from '@/utils/defaultPageResponse';
import { useEffect, useState } from 'react'

const useGetUser = (
  {
    page = 0,
    size = 15,
    query,
  }: {
    page?: number;
    size?: number;
    query?: string;
  },
  state: "RANKING" | null,
  initialData: PageResponse<User>
) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PageResponse<User>>(
    initialData
  );

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getUsers(page, size, query);
      setData(response as PageResponse<User>);
    } catch {
      setData(defaultPageResponse() as PageResponse<User>)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, size, state, query]);

  return data
}

export default useGetUser