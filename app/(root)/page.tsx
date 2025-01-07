import ContestCard from '@/components/ContestCard';
import MainMenu from '@/components/MainMenu'
import StatCard from '@/components/StatCard';
import WorkbookItem from '@/components/WorkbookItem';
import React from 'react'

const Home = () => {
  return (
    <div className="w-full h-full overflow-y-scroll">
      <div className="w-full h-[520px] bg-[#2b2b2b]"></div>
      <div className="w-full py-20 flex justify-center">
        <div className="w-80 flex flex-col items-center gap-y-3">
          <p className="text-4xl font-[700] text-main-container">SOLVE</p>
          <div className="w-full h-[2px] bg-main-container"></div>
          <p className="text-[22px] font-[500] tracking-[2.2px] text-main-container">
            더 나은 개발자가 되는 곳
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <MainMenu icon="problem" title="문제" href="/problems" />
        <MainMenu icon="workbook" title="문제집" href="/workbooks" />
        <MainMenu icon="flag" title="대회" href="/contests" />
        <MainMenu icon="shop" title="상점" href="/store" />
        <MainMenu icon="daily" title="데일리" href="/daily" />
      </div>
      <div className="flex flex-col gap-y-5 px-52 py-9">
        <div className="w-full flex justify-between items-center">
          <p className="text-[26px] font-[600] text-main-container">
            최근 진행된 / 진행 중인 대회들
          </p>
          <div className="flex gap-x-5 self-end">
            <div className="flex gap-x-2 items-center">
              <span className="w-4 h-4 bg-primary-700 rounded-full"></span>
              <p className="text-main-container">시작 예정</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <span className="w-4 h-4 bg-secondary-300 rounded-full"></span>
              <p className="text-main-container">진행 중</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <span className="w-4 h-4 bg-danger-500 rounded-full"></span>
              <p className="text-main-container">종료</p>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 gap-6">
          <ContestCard />
          <ContestCard />
          <ContestCard />
          <ContestCard />
          <ContestCard />
          <ContestCard />
        </div>
      </div>
      <div className="px-52 py-9 flex flex-col gap-y-5">
        <p className="text-[26px] font-[600] text-main-container">
          문제집으로 실력 상승
        </p>
        <div className="w-full flex flex-col gap-y-3">
          <WorkbookItem />
          <WorkbookItem />
          <WorkbookItem />
        </div>
      </div>
      <div className="px-52 py-9 flex items-center justify-center gap-x-3">
        <StatCard
          title="등록된 문제"
          description="난이도가 매겨진 문제 기준"
          quantity={11234}
          unit="문제"
        />
        <StatCard
          title="만들어진 문제집"
          description="나의 문제집 포함"
          quantity={23}
          unit="문제집"
        />
        <StatCard
          title="기록된 대회 수"
          description="진행 / 미진행 모두 포함"
          quantity={2230}
          unit="대회"
        />
        <StatCard
          title="해결사의 수"
          description="루키 5 이상"
          quantity={121234}
          unit="명"
        />
      </div>
    </div>
  );
}

export default Home