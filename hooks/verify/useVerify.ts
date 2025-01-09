import { API_URL } from "@/constants/api";
import { BaseResponse } from "@/types/common/base";
import axios from "axios";

const useVerify = () => {
  const verify = async (token: string) => {
    try {
      const { data } = await axios.post<BaseResponse<{ success: boolean }>>(
        `${API_URL}/auth/verify`,
        {},
        { params: { token } }
      );
      if (data) {
        data.data.success;
      }
    } catch {
      return false;
    }
  };

  return verify;
};

export default useVerify;