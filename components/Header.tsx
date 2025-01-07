import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full h-[72px] border-b border-bg-border px-40 flex items-center gap-x-10">
      <Logo width={116} height={116} />
      <div className="gap-x-10 flex items-center flex-1 text-xl text-main-container">
        <Link href="/problems">문제</Link>
        <Link href="/store">상점</Link>
        <Link href="/contests">대회</Link>
      </div>
      <Link href='/login' className="font-bold">로그인</Link>
    </div>
  );
};

export default Header;
