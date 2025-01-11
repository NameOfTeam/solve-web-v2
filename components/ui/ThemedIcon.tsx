"use client";

import { IconName, ICONS } from "@/constants/icons";
import React, { ComponentType, SVGProps } from "react";

export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

type ColorVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "warning"
  | "info"
  | "success"
  | "bg"
  | "main"
  | "container";
type ColorShade =
  | "0"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "container"
  | "border";

interface ThemedIconProps {
  icon: IconName;
  width: number;
  height: number;
  variant?: ColorVariant;
  shade?: ColorShade;
  color?: string;
  className?: string;
}

const ThemedIcon = ({ icon, width, height, variant, shade, color, className }: ThemedIconProps) => {
  const colorKey = shade ? `${variant}-${shade}` : variant;
  const Icon = ICONS[icon];

  return (
    <Icon
      width={width}
      height={height}
      fill={color || `var(--${colorKey})`}
      className={`text-${colorKey} ${className}`}
    />
  );
};

export default ThemedIcon;
