"use client";

import Link from "next/link";
import React from "react";
import ThemedIcon from "../ui/ThemedIcon";
import { IconName } from "@/constants/icons";

const MainMenu = ({
  icon,
  title,
  href,
}: {
  icon: IconName;
  title: string;
  href: string;
}) => {
  return (
    <Link
      className="flex flex-col gap-y-2 items-center justify-center cursor-pointer"
      href={href}
    >
      <div className="border-[1.2px] border-bg-border p-3 rounded-lg bg-container">
        <ThemedIcon
          icon={icon}
          height={48}
          width={48}
          variant="main"
          shade="container"
        />
      </div>
      <p className="text-base font-[600] text-main-container">{title}</p>
    </Link>
  );
};

export default MainMenu;
