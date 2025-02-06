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
    <div className="w-full flex justify-center bg-container border-b border-bg-border ">
      <div className="w-[72%] h-[72px] flex items-center justify-between relative text-main-container">

        <div className=" flex items-center text-base h-full text-main-container header relative whitespace-nowrap z-[999]">

          <svg className="lg:hidden stroke-main-container w-[36px] h-full" viewBox="0 0 24 24">
            <path d="M4 6H20M4 12H20M4 18H20" strokeWidth="2px" strokeLinecap="round" strokeLinejoin="round" width="36px" height="36px"/>
          </svg>

          <div className="gap-x-7 flex max-lg:hidden ">
            <Link href="/problems">문제</Link>
            <Link href="/workbooks">문제집</Link>
            <Link href="/contests">대회</Link>
            <Link href="/boards">게시판</Link>
            <Link href="/store">상점</Link>
          </div>

          <HeaderExtension />
        </div>

        <div className="absolute flex justify-center w-full">
          <Link href="/" className="cursor-pointer text-main-container">
            <Logo width={84} height={40} />
          </Link>
        </div>

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
          <Link href="/login" className="font-bold text-main-container whitespace-nowrap z-30">
            로그인
          </Link>

        )}
      </div>
    </div>
  );
};

export default Header;
