import { getContests } from "@/api/contest/getContests";
import { getStatistics } from "@/api/statistics/getStatistics";
import { getWorkbooks } from "@/api/workbook/getWorkbooks";
import CardWrapper from "@/components/ui/CardWrapper";
import ItemWrapper from "@/components/ui/ItemWrapper";
import MainMenu from "@/components/ui/MainMenu";
import StatCard from "@/components/ui/StatCard";
import React from "react";

const Home = async () => {
  const contestsData = await getContests(0, 8);
  const workbooksData = await getWorkbooks(0, 3);
  const statisticsData = await getStatistics();

  return (
    <div className="w-full pb-16">
      <div className="w-full h-[520px] bg-[#2b2b2b]"></div>
      <div className="flex justify-center gap-[2.4%] py-12">
        <MainMenu icon="problem" title="문제" href="/problems" />
        <MainMenu icon="workbook" title="문제집" href="/workbooks" />
        <MainMenu icon="flag" title="대회" href="/contests" />
        <MainMenu icon="shop" title="상점" href="/store" />
        <MainMenu icon="boards" title="게시판" href="/boards" />
      </div>
      <div className="flex justify-center x-screen py-9">
        <div className="flex flex-col gap-y-3 w-[72%]">
          <p className="text-xl font-[600] text-main-container">
            최근 진행된 / 진행 중인 대회들
          </p>
          <CardWrapper data={contestsData || []} />
        </div>
      </div>
      <div className="flex justify-center x-screen py-9">
        <div className="flex flex-col gap-y-3 w-[72%]">  
          <p className="text-xl font-[600] text-main-container">
            문제집으로 실력 상승
          </p>
          <ItemWrapper data={workbooksData || []} />
        </div>
      </div>
      <div className="w-full flex justify-center py-9">
        <div className="w-[72%] flex items-center justify-center gap-x-3 max-lg:grid max-lg:grid-cols-2 max-lg:gap-2 max-sm:flex max-sm:flex-col max-sm:items-stretch">
          <StatCard
            title="등록된 문제"
            description="난이도가 매겨진 문제 기준"
            quantity={statisticsData?.problemCount || 0}
            unit="문제"
          />
          <StatCard
            title="만들어진 문제집"
            description="나의 문제집 포함"
            quantity={statisticsData?.workbookCount || 0}
            unit="문제집"
          />
          <StatCard
            title="기록된 대회 수"
            description="진행 / 미진행 모두 포함"
            quantity={statisticsData?.contestCount || 0}
            unit="대회"
          />
          <StatCard
            title="해결사의 수"
            description="문 티어 이상"
            quantity={statisticsData?.userCount || 0}
            unit="명"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
