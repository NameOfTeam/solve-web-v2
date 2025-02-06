"use client";

import React, { useEffect, useState, useId } from "react";
import ThemedIcon from "./ThemedIcon";
import { useProblemFilterStore } from "@/stores/problem/useProblemFilterStore";
import { Tier } from "@/types/tier/tier";
import { useCategoryStore } from "@/stores/board/useCategoryStore";
import { useLanguageStore } from "@/stores/problem/useLanguageStore";
import { useVisibilityStore } from "@/stores/problem/useVisibilityStore";

const DROPDOWN_TOGGLE_EVENT = "dropdownToggle";

const Dropdown = ({
  defaultValue,
  type,
  data,
}: {
  defaultValue: string;
  type: "STATE" | "TIER" | "FILTER" | "CATEGORY" | "LANGUAGE" | "VISIBILITY";
  data: { name: string; value: string }[];
}) => {
  const [opened, setOpened] = useState(false);
  const dropdownId = useId();

  const { states, tiers, order, setTiers, setOrder, setStates } =
    useProblemFilterStore();
  const { category, setCategory } = useCategoryStore();
  const { language, setLanguage } = useLanguageStore();
  const { visibility, setVisibility } = useVisibilityStore();

  useEffect(() => {
    const handleDropdownToggle = (e: CustomEvent) => {
      if (e.detail.id !== dropdownId && opened) {
        setOpened(false);
      }
    };

    window.addEventListener(
      DROPDOWN_TOGGLE_EVENT,
      handleDropdownToggle as EventListener
    );

    return () => {
      window.removeEventListener(
        DROPDOWN_TOGGLE_EVENT,
        handleDropdownToggle as EventListener
      );
    };
  }, [dropdownId, opened]);

  const handleToggle = () => {
    const newOpenState = !opened;
    setOpened(newOpenState);

    if (newOpenState) {
      window.dispatchEvent(
        new CustomEvent(DROPDOWN_TOGGLE_EVENT, {
          detail: { id: dropdownId },
        })
      );
    }
  };

  const handleCheckboxChange = (value: string) => {
    if (type === "STATE") {
      const newState = states.includes(value)
        ? states.filter((item) => item !== value)
        : [...states, value];
      setStates(newState);
    } else if (type === "TIER") {
      const newTier = tiers.includes(value as Tier)
        ? tiers.filter((item) => item !== value)
        : ([...tiers, value] as Tier[]);
      setTiers(newTier);
    }
  };

  const getDisplayValue = () => {
    if (
      type === "FILTER" ||
      type === "CATEGORY" ||
      type === "LANGUAGE" ||
      type === "VISIBILITY"
    ) {
      const selectedItem =
        type === "FILTER"
          ? data.find((item) => item.value === order)
          : type === "LANGUAGE"
          ? data.find((item) => item.value === language)
          : type === "VISIBILITY"
          ? data.find((item) => item.value === visibility)
          : data.find((item) => item.value === category);
      return selectedItem ? selectedItem.name : defaultValue;
    } else {
      return defaultValue;
    }
  };

  const isItemChecked = (value: string) => {
    if (type === "STATE") {
      return states.includes(value);
    } else if (type === "TIER") {
      return tiers.includes(value as Tier);
    }
    return false;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.classList.contains("dropdown") &&
        !target.classList.contains("wrapper") &&
        opened
      ) {
        setOpened(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [opened]);

  return (
    <div
      onClick={handleToggle}
      className="wrapper bg-container pr-3 pl-4 py-2 rounded-lg flex justify-center items-center gap-x-2 relative cursor-pointer z-10"
    >
      <p className="wrapper text-sm font-[600] text-main-container">
        {getDisplayValue()}
      </p>
      <ThemedIcon
        icon="drop-down"
        height={16}
        width={16}
        variant="main"
        shade="container"
        className={`${
          opened ? "rotate-180" : "rotate-0"
        } transition-transform wrapper`}
      />
      {opened && (
        <div
          className={`dropdown absolute top-10 left-[-1px] bg-container border border-bg-border rounded-lg px-3 py-3 flex flex-col gap-y-3 flex-wrap max-h-52 ${
            data.length > 10 ? "w-96" : type === "STATE" && "w-40"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {type === "FILTER" ||
          type === "CATEGORY" ||
          type === "LANGUAGE" ||
          type === "VISIBILITY"
            ? data.map((item) => (
                <p
                  key={item.value}
                  className={`dropdown text-sm font-[400] whitespace-nowrap px-1 cursor-pointer ${
                    order === item.value ||
                    language === item.value ||
                    category === item.value ||
                    visibility === item.value
                      ? "text-secondary-500"
                      : "text-main-container"
                  }`}
                  onClick={
                    type === "CATEGORY"
                      ? () =>
                          setCategory(
                            item.value as
                              | "FREE"
                              | "QUESTION"
                              | "SUGGESTION"
                              | "INFORMATION"
                          )
                      : type === "LANGUAGE"
                      ? () =>
                          setLanguage(
                            item.value as "PYTHON" | "NODE_JS" | "C" | "JAVA"
                          )
                      : type === "VISIBILITY"
                      ? () => setVisibility(item.value as "PUBLIC" | "PRIVATE")
                      : () => setOrder(item.value)
                  }
                >
                  {item.name}
                </p>
              ))
            : data.map((item) => (
                <label
                  key={item.value}
                  className="dropdown flex items-center gap-x-2 text-sm font-[400] px-1 cursor-pointer"
                >
                  <div className="dropdown relative flex items-center">
                    <input
                      type="checkbox"
                      checked={isItemChecked(item.value)}
                      onChange={() => handleCheckboxChange(item.value)}
                      className="dropdown appearance-none w-4 h-4 border border-bg-border rounded-sm checked:bg-secondary-500 checked:border-secondary-500 cursor-pointer"
                    />
                    {isItemChecked(item.value) && (
                      <div className="dropdown absolute inset-0 flex items-center justify-center pointer-events-none">
                        <svg
                          className="dropdown w-3 h-3 text-white"
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
                  <span className="dropdown text-main-container min-w-10">
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
