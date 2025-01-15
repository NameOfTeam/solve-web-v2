import SettingTogle from "@/components/setting/SettingTogle";
import React from "react";
import ThemedIcon from "@/components/ui/ThemedIcon";

const Privacy = () => {
  const data1 = [
    { id: "1", description: "내 프로필 공개하기", data: true },
    { id: "2", description: "내 티어 공개하기", data: true },
    {
      id: "3",
      description: "내 활동 공개하기 ( 문제 풀이, 대회 참여 등 )",
      data: true,
    },
    { id: "4", description: "사용하는 언어 공개하기", data: true },
  ];
  const data2 = [
    { id: "5", description: "내 스트릭 공개하기", data: true },
    { id: "6", description: "풀이한 문제 공개하기", data: true },
    {
      id: "7",
      description: "풀이한 문제 분포 공개하기 ( 태그, 난이도 )",
      data: true,
    },
    { id: "8", description: "치장 요소 공개하기 ( 뱃지, 배경 )", data: true },
  ];

  const LinkData = [
    { id: "1", link: "cns.b1nd.alt" },
    { id: "2", link: "cns.b1nd.alt" },
  ];

  return (
    <div className="py-5 px-7 rounded-lg border-[1.2px] border-container-border flex flex-col gap-4 text-base font-semibold bg-container">
      <div className="flex flex-col gap-3 pb-4 border-b border-container-border">
        <p>
          아이디 <span>*</span>
        </p>
        <input className="w-1/2 h-12 bg-bg border-container-border border rounded-lg px-5 outline-none text-base font-normal" />
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
                <SettingTogle checked={item.data} />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 w-1/2">
            {data2.map((item) => (
              <div className="flex" key={item.description}>
                <p className="flex-1">{item.description}</p>
                <SettingTogle checked={item.data} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 pb-4 border-b border-container-border">
        <p>이름</p>
        <input className="w-full h-12 bg-bg border-container-border border rounded-lg px-5 outline-none text-base font-normal" />
        <div className="flex w-full">
          <p className="flex-1">프로필에 표시하기</p>
          <SettingTogle checked={false} />
        </div>
      </div>
      <div className="flex gap-4 border-b border-container-border">
        <div className="flex flex-col gap-3 pb-4 w-1/2">
          <p>이름</p>
          <input className="w-full h-12 bg-bg border-container-border border rounded-lg px-5 outline-none text-base font-normal" />
          <div className="flex w-full">
            <p className="flex-1">프로필에 표시하기</p>
            <SettingTogle checked={false} />
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-4 w-1/2">
          <p>이름</p>
          <input
            type="date"
            className="w-full h-12 bg-bg border-container-border border rounded-lg px-5 outline-none text-base font-normal"
          />
          <div className="flex w-full">
            <p className="flex-1">프로필에 표시하기</p>
            <SettingTogle checked={false} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 pb-4 border-b border-container-border">
        <p>프로필</p>
        <p className=" text-xs text-bg-border">
          다양한 정보 공개 여부를 설정할 수 있어요.
        </p>
        <div className="flex flex-col gap-2">
          {LinkData.map((item) => (
            <div
              key={item.id}
              className="flex h-12 px-5 items-center bg-bg border border-container-border rounded-lg"
            >
              <div className="flex-1">{item.link}</div>
              <ThemedIcon icon="close" width={24} height={24} />
            </div>
          ))}
        </div>
      </div>
      <button className=" self-end w-24 h-9 bg-primary-700 text-white rounded-lg">
        저장하기
      </button>
    </div>
  );
};

export default Privacy;
