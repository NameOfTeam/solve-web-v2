"use client";

import SettingRadio from "@/components/setting/SettingRadio";
import React, { useEffect, useState } from "react";

interface ThemeListType {
  name: string;
  description: string;
  has: boolean;
  canBuy: boolean;
}

const Display = () => {
  const [tierShow, setTierShow] = useState<
    "ALLSHOW" | "ALLHIDE" | "SOLVEDSHOW"
  >("ALLSHOW");

  useEffect(() => {
    console.log(tierShow);
  }, [tierShow]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchThemeListByPage = ({
    page,
    size = 9,
  }: {
    page: number;
    size: number;
  }) => {
    try {
    } catch (err) {}
  };

  const ThemeData: ThemeListType[] = [
    { name: "보라", description: "씹 지리는 테마", has: true, canBuy: true },
    {
      name: "다크",
      description: "재민이가 한땀 한땀",
      has: true,
      canBuy: true,
    },
    {
      name: "화이트",
      description: "블라 샬라 요요요",
      has: true,
      canBuy: true,
    },
    {
      name: "골드",
      description: "빡빡이 힙합바지 간지",
      has: false,
      canBuy: true,
    },
    { name: "레드", description: "대구시장 홍준표", has: false, canBuy: true },
    { name: "블루", description: "모든걸 찢는 색깔", has: false, canBuy: true },
    {
      name: "브라운",
      description: "브라운 박사님의 발명품",
      has: false,
      canBuy: false,
    },
    {
      name: "아쿠아마린",
      description: "바다유적 속 엘리트 가디언",
      has: false,
      canBuy: false,
    },
    {
      name: "그린",
      description: "윤과 안의 합병(merge)",
      has: false,
      canBuy: false,
    },
    { name: "보라", description: "씹 지리는 테마", has: true, canBuy: true },
    {
      name: "다크",
      description: "재민이가 한땀 한땀",
      has: true,
      canBuy: true,
    },
    {
      name: "화이트",
      description: "블라 샬라 요요요",
      has: true,
      canBuy: true,
    },
    {
      name: "골드",
      description: "빡빡이 힙합바지 간지",
      has: false,
      canBuy: true,
    },
    { name: "레드", description: "대구시장 홍준표", has: false, canBuy: true },
    { name: "블루", description: "모든걸 찢는 색깔", has: false, canBuy: true },
    {
      name: "브라운",
      description: "브라운 박사님의 발명품",
      has: false,
      canBuy: false,
    },
    {
      name: "아쿠아마린",
      description: "바다유적 속 엘리트 가디언",
      has: false,
      canBuy: false,
    },
    {
      name: "그린",
      description: "윤과 안의 합병(merge)",
      has: false,
      canBuy: false,
    },
  ];

  return (
    <div className="py-5 px-7 rounded-lg border-[1.2px] border-container-border flex flex-col gap-4 text-base font-semibold bg-container">
      <div className="flex flex-col gap-3 pb-4 border-b border-container-border">
        <p>선택된 언어</p>
        <div className="gap-2 flex flex-col">
          {/* 서버에서 받은거 state에 담아서 value랑 setValue를 인자로 넘겨주면 됨. */}
          <SettingRadio
            value={tierShow}
            setValue={setTierShow}
            name="전체 표시"
            condition="ALLSHOW"
          />
          <SettingRadio
            value={tierShow}
            setValue={setTierShow}
            name="전체 미표시"
            condition="ALLHIDE"
          />
          <SettingRadio
            value={tierShow}
            setValue={setTierShow}
            name="해결한 문제만 표시"
            condition="SOLVEDSHOW"
          />
        </div>
      </div>
    </div>
  );
};

export default Display;
