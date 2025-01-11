import Link from "next/link";
import React from "react";
import ThemedIcon from "./ThemedIcon";

const SocialLogin = () => {
  return (
    <div className=" flex gap-6">
      <Link
        href=""
        className=" w-12 h-12 border border-bg-border rounded-full flex justify-center items-center bg-container"
      >
        <ThemedIcon icon="google" width={36} height={36} />
      </Link>
      <Link
        href=""
        className=" w-12 h-12 border border-bg-border rounded-full flex justify-center items-center bg-container"
      >
        <ThemedIcon icon="facebook" width={36} height={36} />
      </Link>
      <Link
        href=""
        className=" w-12 h-12 border border-bg-border rounded-full flex justify-center items-center bg-container"
      >
        <ThemedIcon icon="github" width={36} height={36} />
      </Link>
      <Link
        href=""
        className=" w-12 h-12 border border-bg-border rounded-full flex justify-center items-center bg-container"
      >
        <ThemedIcon icon="naver" width={36} height={36} />
      </Link>
      <Link
        href=""
        className=" w-12 h-12 border border-bg-border rounded-full flex justify-center items-center bg-container"
      >
        <ThemedIcon icon="kakao" width={36} height={36} />
      </Link>
    </div>
  );
};

export default SocialLogin;
