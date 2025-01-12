"use client";

import React, { useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";
import useGetMe from "@/hooks/user/useGetMe";
import Image from "next/image";
import { API_URL } from "@/constants/api";
import { useUserStore } from "@/stores/user/useUserStore";
import HeaderExtension from "./HeaderExtension";

const Header = () => {
  const fetchUser = useGetMe();
  const { user } = useUserStore();

  useEffect(() => {
    fetchUser();
  }, [user, fetchUser]);

  return (
    <div className="w-full h-[72px] bg-container border-b border-bg-border px-40 flex items-center gap-x-10 relative overflow-visible">
      <Link href="/" className="cursor-pointer text-main-container">
        <Logo width={116} height={52} />
      </Link>

      <div className="gap-x-7 h-full flex items-center text-base text-main-container header relative overflow-visible">
        <Link href="/problems">문제</Link>
        <Link href="/workbooks">문제집</Link>
        <Link href="/contests">대회</Link>
        <Link href="/boards">게시판</Link>
        <Link href="/store">상점</Link>
        <HeaderExtension />
      </div>

      <div className="flex-1" />

      {user?.id ? (
        <Link
          className="w-12 h-12 rounded-full cursor-pointer"
          href={`/user/${user.username}`}
        >
          <Image
            src={`${API_URL}/avatars/${user.id}.webp`}
            alt="User avatar"
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
