"use client";

import { useTheme } from "@/contexts/themeContext";
import React from "react";

const ChangeTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="fixed w-16 h-16 rounded-full bg-bg border-bg-border border right-6 bottom-6 cursor-pointer transition-all active:scale-95 flex items-center justify-center text-main-container"
      onClick={() =>
        setTheme(
          theme === "dark" ? "purple" : theme === "purple" ? "light" : "dark"
        )
      }
    >
      {theme}
    </div>
  );
};

export default ChangeTheme;
