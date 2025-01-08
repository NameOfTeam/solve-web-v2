import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemedIcon from "./ThemedIcon";

const SocialLogin = () => {
  return (
    <div className=" flex gap-6">
      <Link href="" className=" w-12 h-12 border border-bg-border rounded-full">
        <ThemedIcon icon="google" width={32} height={32} />
      </Link>
      <Link href="" className=" w-12 h-12 border border-bg-border rounded-full">
        <ThemedIcon icon="facebook" width={32} height={32} />
      </Link>
      <Link href="" className=" w-12 h-12 border border-bg-border rounded-full">
        <ThemedIcon icon="github" width={32} height={32} />
      </Link>
      <Link href="" className=" w-12 h-12 border border-bg-border rounded-full">
        <ThemedIcon icon="naver" width={34} height={34} />
      </Link>
      <Link href="" className=" w-12 h-12 border border-bg-border rounded-full">
        <ThemedIcon icon="kakao" width={32} height={32} />
      </Link>
    </div>
  );
};

export default SocialLogin;
