"use client";

import React, {  useState } from "react";
import ThemedIcon from "./ThemedIcon";
import { useProblemFilterStore } from "@/stores/problem/useProblemFilterStore";

const Dropdown = ({
  defaultValue,
  type,
  data,
}: {
  defaultValue: string;
  type: "STATE" | "TIER" | "FILTER";
  data: { name: string; value: string }[];
}) => {
  const [opened, setOpened] = useState(false);
  const { states, tiers, order, setTiers, setOrder, setStates } =
    useProblemFilterStore();

  const handleCheckboxChange = (value: string) => {
    if (type === "STATE") {
      const newState = states.includes(value)
        ? states.filter((item) => item !== value)
        : [...states, value];
      setStates(newState);
    } else if (type === "TIER") {
      const newTier = tiers.includes(value)
        ? tiers.filter((item) => item !== value)
        : [...tiers, value];
      setTiers(newTier);
    }
  };

  const getDisplayValue = () => {
    if (type === "FILTER") {
      const selectedItem = data.find((item) => item.value === order);
      return selectedItem ? selectedItem.name : defaultValue;
    } else {
      return defaultValue;
    }
  };

  const isItemChecked = (value: string) => {
    if (type === "STATE") {
      return states.includes(value);
    } else if (type === "TIER") {
      return tiers.includes(value);
    }
    return false;
  };
  return (
    <div
      className="pr-3 pl-4 py-2 bg-container border border-bg-border rounded-lg flex justify-center items-center gap-x-2 relative overflow-visible cursor-pointer"
      onClick={() => setOpened((prev) => !prev)}
    >
      <p className="text-sm font-[600] text-main-container">
        {getDisplayValue()}
      </p>
      <ThemedIcon
        icon="drop-down"
        height={16}
        width={16}
        variant="main"
        shade="container"
        className={`${ opened ? 'rotate-180' : 'rotate-0' } transition-transform`}
      />
      {opened && (
        <div
          className={`absolute top-10 left-[-1px] bg-container border border-bg-border rounded-lg px-3 py-3 flex flex-col gap-y-3 flex-wrap max-h-52 ${
            data.length > 10 ? "w-80" : type === "STATE" && "w-40"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {type === "FILTER"
            ? data.map((item) => (
                <p
                  key={item.value}
                  className={`text-sm font-[400] whitespace-nowrap px-1 cursor-pointer ${
                    order === item.value
                      ? "text-secondary-500"
                      : "text-main-container"
                  }`}
                  onClick={() => setOrder(item.value)}
                >
                  {item.name}
                </p>
              ))
            : data.map((item) => (
                <label
                  key={item.value}
                  className="flex items-center gap-x-2 text-sm font-[400] px-1 cursor-pointer"
                >
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      checked={isItemChecked(item.value)}
                      onChange={() => handleCheckboxChange(item.value)}
                      className="appearance-none w-4 h-4 border border-bg-border rounded-sm checked:bg-secondary-500 checked:border-secondary-500 cursor-pointer"
                    />
                    {isItemChecked(item.value) && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <svg
                          className="w-3 h-3 text-white"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.5 6L5 8.5L9.5 4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <span className="text-main-container min-w-10">
                    {item.name}
                  </span>
                </label>
              ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
