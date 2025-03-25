import solveAxios from '@/libs/axios/solveAxios'
import { BaseResponse } from '@/types/response/base'
import { User } from '@/types/user/user'
import { defaultPageResponse } from '@/utils/defaultPageResponse'

export const getUsers = async (
  page: number = 1,
  size: number = 20,
  query?: string,
) => {
  const params: Record<string, any> = {
    page,
    size,
  };

  if (query) {
    params.query = query;
  }

  try {
    const { data } = await solveAxios.get<BaseResponse<User[]>>(
      `users/search`,
      {
        params,
      }
    );

    return data.data;
  } catch {
    return defaultPageResponse();
  }
}
