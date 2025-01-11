"use client";

import React from "react";
import ThemedIcon from "./ThemedIcon";

const Logo = ({ width, height }: { width: number; height: number }) => {
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
