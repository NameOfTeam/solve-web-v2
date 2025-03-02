"use client";

import SettingTogle from "@/components/setting/SettingToggle";
import React, { useEffect, useState } from "react";
import ThemedIcon from "@/components/ui/ThemedIcon";
import { PrivacySettings } from "@/types/setting/privacySettings";
import { useForm } from "react-hook-form";
import SettingToggle from "@/components/setting/SettingToggle";

type ProfileSettingsType =
  | "showProfile"
  | "showTier"
  | "showActivity"
  | "showLanguage"
  | "showStreak"
  | "showSolvedProblem"
  | "showSolvedProblemsDetail"
  | "showAccessory";

type PrivacySettingType =
  | "name.showName"
  | "birth.showBirth"
  | "gender.showGender";

interface ProfileSettingData {
  id: ProfileSettingsType;
  description: string;
}

const Privacy = () => {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { isDirty },
  } = useForm<PrivacySettings>({
    defaultValues: {
      id: "",
      profile: {
        showProfile: false,
        showTier: false,
        showActivity: false,
        showLanguage: false,
        showStreak: false,
        showSolvedProblem: false,
        showSolvedProblemsDetail: false,
        showAccessory: false,
      },
      name: {
        name: "",
        showName: false,
      },
      gender: {
        gender: "",
        showGender: false,
      },
      birth: {
        birth: "",
        showBirth: false,
      },
      link: ["a", "b"],
    },
  });

  const watchedValues = watch();

  const data1: ProfileSettingData[] = [
    { id: "showProfile", description: "내 프로필 공개하기" },
    { id: "showTier", description: "내 티어 공개하기" },
    {
      id: "showActivity",
      description: "내 활동 공개하기 ( 문제 풀이, 대회 참여 등 )",
    },
    { id: "showLanguage", description: "사용하는 언어 공개하기" },
  ];
  const data2: ProfileSettingData[] = [
    { id: "showStreak", description: "내 스트릭 공개하기" },
    { id: "showSolvedProblem", description: "풀이한 문제 공개하기" },
    {
      id: "showSolvedProblemsDetail",
      description: "풀이한 문제 분포 공개하기 ( 태그, 난이도 )",
    },
    { id: "showAccessory", description: "치장 요소 공개하기 ( 뱃지, 배경 )" },
  ];

  const LinkData = [
    { id: "1", link: "cns.b1nd.alt" },
    { id: "2", link: "cns.b1nd.alt" },
  ];

  const onSubmit = (data: PrivacySettings) => {
    console.log(data);
    // API 호출 등 추가 로직
  };

  const handleProfileToggle = (id: ProfileSettingsType) => {
    setValue(`profile.${id}`, !watch(`profile.${id}`), {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleToggle = (id: PrivacySettingType) => {
    setValue(id, !watch(id), {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const removeLink = (link: string) => {
    setValue(
      "link",
      watch("link").filter((item) => {})
    );
  };
  const handleLink = (link: string, idx: number) => {
    setValue(`link.${idx}`, link, { shouldDirty: true });
  };

  useEffect(() => {
    console.log(watchedValues);
  }, [watchedValues]);

  return (
    <form
      onSubmit={() => {
        onSubmit;
      }}
      className="py-5 px-7 rounded-lg border-[1.2px] border-container-border flex flex-col gap-4 text-base font-semibold bg-container"
    >
      <div className="flex flex-col gap-3 pb-4 border-b border-container-border">
        <p>
          아이디 <span>*</span>
        </p>
        <input
          {...register("id")}
          className="w-1/2 h-12 bg-bg border-container-border border rounded-lg px-5 outline-none text-base font-normal box-border"
        />
      </div>
      <div className="flex flex-col gap-3 pb-4 border-b border-container-border">
        <div>
          <p>프로필</p>
          <p className=" text-xs text-bg-border">
            다양한 정보 공개 여부를 설정할 수 있어요.
          </p>
        </div>
        <div className="flex gap-4 w-full font-normal text-base">
          <div className="flex flex-col gap-3 w-1/2">
            {data1.map((item) => (
              <div className="flex" key={item.description}>
                <p className="flex-1">{item.description}</p>
                <SettingToggle
                  checked={
                    watchedValues.profile[
                      item.id as keyof typeof watchedValues.profile
                    ]
                  }
                  onChange={() => handleProfileToggle(item.id)}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 w-1/2">
            {data2.map((item) => (
              <div className="flex" key={item.description}>
                <p className="flex-1">{item.description}</p>
                <SettingToggle
                  checked={
                    watchedValues.profile[
                      item.id as keyof typeof watchedValues.profile
                    ]
                  }
                  onChange={() => handleProfileToggle(item.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 pb-4 border-b border-container-border">
        <p>이름</p>
        <input
          {...register("name.name")}
          className="w-full h-12 bg-bg border-container-border border rounded-lg px-5 outline-none text-base font-normal"
        />
        <div className="flex w-full">
          <p className="flex-1">프로필에 표시하기</p>
          <SettingToggle
            checked={watchedValues.name.showName}
            onChange={() => handleToggle("name.showName")}
          />
        </div>
      </div>
      <div className="flex gap-4 border-b border-container-border">
        <div className="flex flex-col gap-3 pb-4 w-1/2">
          <p>성별</p>
          <input
            {...register("gender.gender")}
            className="w-full h-12 bg-bg border-container-border border rounded-lg px-5 outline-none text-base font-normal"
          />
          <div className="flex w-full">
            <p className="flex-1">프로필에 표시하기</p>
            <SettingTogle
              checked={watchedValues.gender.showGender}
              onChange={() => handleToggle("gender.showGender")}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-4 w-1/2">
          <p>생년월일</p>
          <input
            type="date"
            {...register("birth.birth")}
            className="w-full h-12 bg-bg border-container-border border rounded-lg px-5 outline-none text-base font-normal"
          />
          <div className="flex w-full">
            <p className="flex-1">프로필에 표시하기</p>
            <SettingTogle
              checked={watchedValues.birth.showBirth}
              onChange={() => handleToggle("birth.showBirth")}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 pb-4 border-b border-container-border">
        <div className="flex items-center">
          <div className="flex flex-col gap-1 flex-1">
            <p>링크</p>
            <p className=" text-xs text-bg-border">
              최대 3개까지 등록 가능합니다.
            </p>
          </div>
          <div onClick={() => {}}>
            <ThemedIcon icon="add" width={24} height={24} />
          </div>
        </div>

        <div className="flex flex-col gap-2 font-normal">
          {watchedValues.link.map((item, idx) => (
            <input
              key={item}
              className="flex h-12 px-5 items-center bg-bg border border-container-border rounded-lg"
              type="text"
              value={item}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleLink(e.target.value, idx);
              }}
            ></input>
          ))}
        </div>
      </div>
      <button
        disabled={!isDirty}
        className={`self-end w-24 h-9 ${
          isDirty ? "bg-primary-700" : "bg-bg-border"
        } text-white rounded-lg`}
      >
        저장하기
      </button>
    </form>
  );
};

export default Privacy;
