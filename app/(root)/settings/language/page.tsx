"use client";

import ThemedIcon from "@/components/ui/ThemedIcon";
import { LanguageSettings } from "@/types/setting/privacySettings";
import React, { useEffect, useState } from "react";

const Language = () => {
  const [languages, setLanguages] = useState<LanguageSettings>({
    selected: [],
    left: ["PYTHON", "C", "JAVA", "NODE"],
  });

  useEffect(() => {
    console.log(languages);
  }, [languages]);

  const moveToSelected = (lang: string) => {
    setLanguages({
      selected: [...languages.selected, lang],
      left: languages.left.filter((item) => item !== lang),
    });
  };

  const moveToLeft = (lang: string) => {
    setLanguages({
      left: [...languages.left, lang],
      selected: languages.selected.filter((item) => item !== lang),
    });
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
                onClick={() => {
                  moveToLeft(language);
                }}
              >
                <p className="flex-1 font-normal">{language}</p>
                <button>
                  <ThemedIcon icon="close" width={24} height={24} />
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
                onClick={() => {
                  moveToSelected(language);
                }}
              >
                <p className="flex-1 font-normal">{language}</p>
                <button>
                  <ThemedIcon icon="add" width={24} height={24} />
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
