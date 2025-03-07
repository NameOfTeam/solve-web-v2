"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ProfileTabs = () => {
  const pathname = usePathname();

  return (
    <div className="w-full flex gap-2 bg-container h-14 px-6 items-center rounded-lg border border-container-border shadow">
      <Link
        href="/profile"
        replace
        className={`px-4 py-2 rounded-lg ${
          pathname === "/profile"
            ? "bg-secondary-600 text-white "
            : "bg-container text-bg-border "
        }`}
      >
        개요
      </Link>
      <Link
        href="/profile/solved"
        replace
        className={`px-4 py-2 rounded-lg ${
          pathname === "/profile/solved"
            ? "bg-secondary-600 text-white"
            : "bg-container text-bg-border border border-container-border"
        }`}
      >
        해결한 문제
      </Link>
      <Link
        href="/profile/badge"
        replace
        className={`px-4 py-2 rounded-lg ${
          pathname === "/profile/badge"
            ? "bg-secondary-600 text-white"
            : "bg-container text-bg-border border border-container-border"
        }`}
      >
        뱃지
      </Link>
      <Link
        href="/profile/background"
        replace
        className={`px-4 py-2 rounded-lg ${
          pathname === "/profile/background"
            ? "bg-secondary-600 text-white"
            : "bg-container text-bg-border border border-container-border"
        }`}
      >
        프로필 배경
      </Link>
    </div>
  );
};

export default ProfileTabs;
