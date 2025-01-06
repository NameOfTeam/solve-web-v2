import ContestCard from '@/components/ContestCard';
import MainMenu from '@/components/MainMenu'
import React from 'react'

const Home = () => {
  return (
    <div className="w-full h-full overflow-y-scroll">
      <div className="w-full h-[520px] bg-[#2b2b2b]"></div>
      <div className="w-full py-20 flex justify-center">
        <div className="w-80 flex flex-col items-center gap-y-3">
          <p className="text-[36px] font-[700]">SOLVE</p>
          <div className="w-full h-[2px] bg-main-container"></div>
          <p className="text-[22px] font-[500] tracking-[2.2px]">
            더 나은 개발자가 되는 곳
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <MainMenu icon="/assets/problem.svg" title="문제" href="/problems" />
        <MainMenu
          icon="/assets/workbook.svg"
          title="문제집"
          href="/workbooks"
        />
        <MainMenu icon="/assets/flag.svg" title="대회" href="/contests" />
        <MainMenu icon="/assets/shop.svg" title="상점" href="/store" />
        <MainMenu icon="/assets/daily.svg" title="데일리" href="/daily" />
      </div>
      <div className="flex flex-col gap-y-5 px-52 py-9">
        <div className="w-full flex justify-between items-center">
          <p className="text-[26px] font-[600]">
            최근 진행된 / 진행 중인 대회들
          </p>
          <div className="flex gap-x-5 self-end">
            <div className="flex gap-x-2 items-center">
              <span className="w-4 h-4 bg-primary-700 rounded-full"></span>
              <p>시작 예정</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <span className="w-4 h-4 bg-secondary-300 rounded-full"></span>
              <p>진행 중</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <span className="w-4 h-4 bg-danger-500 rounded-full"></span>
              <p>종료</p>
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
        <p className="text-[26px] font-[600]">문제집으로 실력 상승</p>
        <div className="w-full flex flex-col gap-y-3">
          
        </div>
      </div>
    </div>
  );
}

export default Home