import { ACCESS_TOKEN_KEY } from "@/constants/token";
import solveAxios from "@/libs/axios/solveAxios";
import { useUserStore } from "@/stores/user/useUserStore";
import { BaseResponse } from "@/types/response/base";
import { User } from "@/types/user/user";
import { useCookies } from "next-client-cookies";

const useGetMe = () => {
  const cookies = useCookies();
  const accessToken = cookies.get(ACCESS_TOKEN_KEY);
  const { user, setUser } = useUserStore();

  const fetchUser = async () => {
    if (!accessToken) {
      return;
    }
    try {
      const { data } = await solveAxios.get<BaseResponse<User>>("/users/me", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (data) {
        if(JSON.stringify(data.data) === JSON.stringify(user)) return;
        setUser(data.data);
      }
    } catch {
      setUser(null);
    }
  };

  return fetchUser;
};

export default useGetMe;
