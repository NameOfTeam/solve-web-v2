import React from "react";
import ExampleBadge from "./ExampleBadge";
import { ICONS } from "@/constants/icons";
import ThemedIcon from "../ui/ThemedIcon";
import Link from "next/link";

interface UsedLanguage {
  language: string;
  count: string;
}

const ProfileBox = () => {
  const dummyUsedLanguage: UsedLanguage[] = [
    { language: "Python 3", count: "3111" },
    { language: "Java", count: "667" },
    { language: "JavaScript", count: "666" },
    { language: "C", count: "490" },
  ];

  const dummyLink: string[] = [
    "https://cns.b1nd.samdi.alt.comm-and",
    "https://jmino.me",
    "https://dodam.b1nd.com",
  ];

  return (
    <div className="w-[28%] flex flex-col gap-6 drop-shadow px-9 py-10 rounded-lg bg-container">
      <div className="w-40 h-40 bg-orange-400 rounded-2xl" />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col pb-4 border-b-bg-border border-b gap-4">
          <p className=" font-bold text-3xl text-main-container">lnlp</p>
          <pre className="w-full text-wrap break-keep font-normal text-base font-sans text-main-container">
            {"안녕하세여~ 동규티비에 동규입니당~ >_< 솔브브님 한판해요"}
          </pre>
        </div>
        <div className="flex flex-col pb-4 border-b-bg-border border-b gap-4">
          <div className="flex justify-between">
            <ExampleBadge />
            <ExampleBadge />
            <ExampleBadge />
            <ExampleBadge />
            <ExampleBadge />
          </div>
          <button className="w-full h-9 bg-primary-700 rounded-lg text-white">
            프로필 수정하기
          </button>
        </div>
        <div className="flex flex-col pb-4 border-b-bg-border border-b gap-4">
          <div className="flex w-full">
            <p className="flex-1 text-secondary-400 font-semibold text-3xl">
              Rookie
            </p>
            <p className="text-secondary-400 text-3xl">20</p>
          </div>
        </div>
        <div className="flex flex-col pb-4 border-b-bg-border border-b gap-4">
          <div className="flex w-full">
            <p className="flex-1 font-normal text-lg text-main-container">
              문재 해결
            </p>
            <p className="font-semibold text-lg text-main-container">1732개</p>
          </div>
          <div className="flex w-full">
            <p className="flex-1 font-normal text-lg text-main-container">
              대회 참여
            </p>
            <p className="font-semibold text-lg text-main-container">16개</p>
          </div>
          <div className="flex w-full">
            <p className="flex-1 font-normal text-lg text-main-container">
              최장 스트릭
            </p>
            <p className="font-semibold text-lg text-main-container">183개</p>
          </div>
          <div className="flex w-full">
            <p className="flex-1 font-normal text-lg text-main-container">
              제출
            </p>
            <p className="font-semibold text-lg text-main-container">5190번</p>
          </div>
        </div>
        <div className="flex flex-col pb-4 border-b-bg-border border-b gap-4">
          {dummyUsedLanguage.map((item, idx) => (
            <div className="flex w-full" key={idx}>
              <p className="flex-1 font-normal text-lg text-main-container">
                {item.language}
              </p>
              <p className="font-semibold text-lg text-main-container">
                {item.count}번
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <ThemedIcon icon="gender" width={16} height={16} />
            <p>he / him</p>
          </div>
          <div className="flex gap-2 items-center">
            <ThemedIcon icon="birth" width={16} height={16} />
            <p>2002년 09월 23일</p>
          </div>
          {dummyLink.map((item, idx) => (
            <div className="flex gap-2 items-center" key={idx}>
              <ThemedIcon icon="link" width={16} height={16} />
              <Link
                href={item}
                className=" text-info-500 font-semibold text-base"
              >
                {item.split("https://")[1]}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
