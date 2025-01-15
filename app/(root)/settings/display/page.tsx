"use client";

import SettingRadio from "@/components/setting/SettingRadio";
import React, { useState } from "react";
import ThemeImage from "@/assets/themeDummyImage.svg";
import Image from "next/image";

const Display = () => {
  const [tierShow, setTierShow] = useState<
    "ALLSHOW" | "ALLHIDE" | "SOLVEDSHOW"
  >("ALLSHOW");

  const ThemeData = [
    { name: "보라", description: "씹 지리는 테마" },
    { name: "다크", description: "재민이가 한땀 한땀" },
    { name: "화이트", description: "블라 샬라 요요요" },
    { name: "골드", description: "빡빡이 힙합바지 간지" },
    { name: "레드", description: "대구시장 홍준표" },
    { name: "블루", description: "모든걸 찢는 색깔" },
    { name: "브라운", description: "브라운 박사님의 발명품" },
    { name: "아쿠아마린", description: "바다유적 속 엘리트 가디언" },
    { name: "그린", description: "윤과 안의 합병(merge)" },
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
      <div className="flex flex-col gap-3">
        <p>Solve 테마 변경</p>
        <div className=" grid grid-cols-3 grid-rows-3 gap-4">

          {/* 테마 목록들 */}
          {ThemeData.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-4 px-5 py-4 rounded-lg border-container-border border"
            >
              {/* <Image
                src={ThemeImage}
                alt="themeImage"
                width={304}
                height={96}
                className=" shadow-md"
              /> */}
              <div className=" w-full h-24 bg-red-100 rounded-lg" />
              <div className=" flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <p>{item.name}</p>
                  <p className="text-base font-normal">{item.description}</p>
                </div>
                <p className="text-base font-normal text-secondary-600">
                  착용하기
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Display;
