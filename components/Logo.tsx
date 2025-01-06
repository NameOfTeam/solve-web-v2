"use client";

import { useTheme } from "@/contexts/themeContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = ({ width, height }: { width: number; height: number }) => {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <Image
      alt=""
      src={`/assets/logo_${theme === "light" ? "black" : "white"}.svg`}
      width={width}
      height={height}
      onClick={() => router.push("/")}
      className="cursor-pointer"
    />
  );
};

export default Logo;
