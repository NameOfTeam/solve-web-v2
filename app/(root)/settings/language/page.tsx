"use client";

import ThemedIcon from "@/components/ui/ThemedIcon";
import React from "react";

const Language = () => {
  const languages = {
    selected: ["JAVA", "KOTLIN"],
    left: [
      "PYTHON",
      "C",
      "GO",
      "C#",
      "JAVASCRIPT",
      "RUBY",
      "C++",
      "RUST",
      "GOLF",
      "TYPESCRIPT",
    ],
  };

  return (
    <div className="py-5 px-7 rounded-lg border-[1.2px] border-container-border flex flex-col gap-4 text-base font-semibold bg-container">
      <div className="flex gap-4">
        <div className="w-1/2 gap-4 flex flex-col">
          <p>선택된 언어</p>
          <div className="h-96 overflow-y-scroll">
            {languages.selected.map((language) => (
              <div
                key={language}
                className="bg-bg border-bg-border border-[1.2px] h-12 px-6 rounded-lg flex items-center mb-3"
              >
                <p className="flex-1 font-normal">{language}</p>
                <button>
                  <ThemedIcon icon="arrow-left-back" width={24} height={24} />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 gap-4 flex flex-col">
          <p>전체 언어</p>
          <div className="h-96 overflow-y-scroll">
            {languages.left.map((language) => (
              <div
                key={language}
                className="bg-bg border-bg-border border-[1.2px] h-12 px-6 rounded-lg flex items-center mb-3"
              >
                <p className="flex-1 font-normal">{language}</p>
                <button>
                  <ThemedIcon icon="arrow-left-back" width={24} height={24} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className=" self-end w-24 h-9 bg-primary-700 text-white rounded-lg">
        저장하기
      </button>
    </div>
  );
};

export default Language;
