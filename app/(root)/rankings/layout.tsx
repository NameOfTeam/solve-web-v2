import RankingFilter from '@/components/ranking/RankingFilter'
import Banner from '@/components/ui/Banner'
import React, { PropsWithChildren } from 'react'

const RankingLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full flex items-center flex-col">
      <Banner title="랭킹" description="다른 해결사들을 살펴볼 수 있어요."/>
      <div className="h-except-header w-[72%]">
        <div className="w-full h-full py-9 flex flex-col gap-y-6"> 
          <div className="flex flex-col gap-y-3">
            {/* <Search route="rankings" /> */}
            <RankingFilter />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default RankingLayout