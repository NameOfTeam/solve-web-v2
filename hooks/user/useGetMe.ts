import { ACCESS_TOKEN_KEY } from "@/constants/token";
import solveAxios from "@/libs/axios/solveAxios";
import { BaseResponse } from "@/types/common/base";
import { User } from "@/types/user/user";
import { useQuery } from "@tanstack/react-query";
import { useCookies } from "next-client-cookies";

const useGetMe = () => {
  const cookies = useCookies();
  const accessToken = cookies.get(ACCESS_TOKEN_KEY);

  const fetchUser = async () => {
    try {
      const { data } = await solveAxios.get<BaseResponse<User>>("/users/me", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (data) {
        return data.data;
      }
    } catch {
      return;
    }
  };

  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    enabled: !!accessToken,
  });

  return data;
};

export default useGetMe;
