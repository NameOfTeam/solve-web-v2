"use client";

import React, { useEffect, useState } from "react";
import ThemedIcon from "./ThemedIcon";

const Dropdown = ({
  defaultValue,
  type,
  data,
}: {
  defaultValue: string;
  type: "SELECT" | "FILTER";
  data: { name: string; value: string }[];
}) => {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(defaultValue);

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest(".dropdown-container")) {
      setOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="dropdown-container pr-3 pl-4 py-2 bg-container border border-bg-border rounded-lg flex justify-center items-center gap-x-2 relative overflow-visible cursor-pointer"
      onClick={() => setOpened((prev) => !prev)}
    >
      <p className="text-sm font-[600] text-main-container">{selected}</p>
      <ThemedIcon
        icon="drop-down"
        height={16}
        width={16}
        variant="main"
        shade="container"
      />
      {opened && (
        <div
          className={`absolute top-10 left-[-1px] bg-container border border-bg-border rounded-lg px-3 py-3 flex flex-col gap-y-3 flex-wrap max-h-52 ${
            data.length > 10 && "w-72"
          }`}
        >
          {data.map((item) => (
            <p
              key={item.value}
              className={`text-sm font-[400] whitespace-nowrap px-1 cursor-pointer ${
                selected === item.name
                  ? "text-secondary-500"
                  : "text-main-container"
              }`}
              onClick={() => setSelected(item.name)}
            >
              {item.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
