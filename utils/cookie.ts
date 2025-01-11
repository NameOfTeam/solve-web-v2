import { deleteCookie, getCookie, setCookie } from "cookies-next/client";
import { getCookies } from "next-client-cookies/server";

export const cookieManager = {
  set: async (key: string, value: string) => {
    if (typeof window === "undefined") {
      const cookieStore = await getCookies();
      cookieStore.set(key, value);
    } else {
      setCookie(key, value);
    }
  },

  get: async (key: string) => {
    if (typeof window === "undefined") {
      const cookieStore = await getCookies();
      return cookieStore.get(key);
    } else {
      return getCookie(key);
    }
  },

  delete: async (key: string) => {
    if (typeof window === "undefined") {
      const cookieStore = await getCookies();
      return cookieStore.remove(key);
    } else {
      return deleteCookie(key);
    }
  },
};
