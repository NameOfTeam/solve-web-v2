"use client";

import { useTheme } from "@/contexts/themeContext";
import { useRouter } from "next/navigation";
import React from "react";
import ThemedIcon from "./ThemedIcon";

const Logo = ({ width, height }: { width: number; height: number }) => {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <ThemedIcon
      width={width}
      height={height}
      icon="logo"
      variant="main"
      shade="container"
    />
  );
};

export default Logo;
