"use client";

import React, { useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";
import useGetMe from "@/hooks/user/useGetMe";
import Image from "next/image";
import { API_URL } from "@/constants/api";
import { useUserStore } from "@/stores/user/useUserStore";

const Header = () => {
  const fetchUser = useGetMe();
  const { user } = useUserStore();

  useEffect(()=>{
    fetchUser();
  },[]);

  return (
    <div className="w-full h-[72px] border-b border-bg-border px-40 flex items-center gap-x-10">
      <Link href="/" className="cursor-pointer text-main-container">
        <Logo width={116} height={116} />
      </Link>
      <div className="gap-x-10 flex items-center flex-1 text-xl text-main-container">
        <Link href="/problems">문제</Link>
        <Link href="/store">상점</Link>
        <Link href="/contests">대회</Link>
      </div>
      {user?.id ? (
        <Link
          className="w-12 h-12 rounded-full cursor-pointer"
          href={`/user/${user.username}`}
        >
          <Image
            src={`${API_URL}/avatars/${user.id}.webp`}
            alt=""
            className="rounded-full"
            width={48}
            height={48}
          />
        </Link>
      ) : (
        <Link href="/login" className="font-bold text-main-container">
          로그인
        </Link>
      )}
    </div>
  );
};

export default Header;
