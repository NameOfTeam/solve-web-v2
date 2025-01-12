import { ACCESS_TOKEN_KEY } from "@/constants/token";
import solveAxios from "@/libs/axios/solveAxios";
import { useUserStore } from "@/stores/user/useUserStore";
import { BaseResponse } from "@/types/response/base";
import { User } from "@/types/user/user";
import { cookieManager } from "@/utils/cookie";

const useGetMe = () => {
  const { user, setUser } = useUserStore();

  const fetchUser = async () => {
    const accessToken = await cookieManager.get(ACCESS_TOKEN_KEY);
    if (!accessToken) {
      return;
    }
    try {
      const { data } = await solveAxios.get<BaseResponse<User>>("/users/me");
      if (data) {
        if (JSON.stringify(data.data) === JSON.stringify(user)) return;
        setUser(data.data);
      }
    } catch {
      setUser(null);
    }
  };

  return fetchUser;
};

export default useGetMe;
