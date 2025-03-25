"use client";

import useGetUser from '@/hooks/user/useGetUser';
import { PageResponse } from '@/types/response/page';
import { User } from '@/types/user/user';
import React, { useState } from 'react'
import PageController from '../ui/PageController';
import Link from 'next/link';

const RankingList = ({
  initialData,
  state,
  query,
}: {
  initialData: PageResponse<User>
  state: "STREAK" | null;
  query?: string;
}) => {
  const [page, setPage] = useState(0);
  const users = useGetUser({page, query}, "RANKING", initialData)

  return (
    <>
      <div className="w-full h-full bg-container rounded-lg">
        <div className="w-full h-14 border-b border-bg-border flex items-center text-base font-[600] px-6 text-main-container">
          <p className="w-16 text-center whitespace-nowrap flex-shrink-0">랭크</p>
          <p className="w-16 text-center flex-shrink-0">등수</p>
          <p className="flex-[1] px-4 whitespace-nowrap flex-shrink-0">해결사</p>
          
          {state === null ? (
            <>
              <p className="w-20 text-center whitespace-nowrap flex-shrink-0">레이팅</p>
              <p className="w-28 text-center whitespace-nowrap max-sm:hidden flex-shrink-0">문제 수</p>
            </>
          ) : (
            <>
              <p className="w-32 text-center whitespace-nowrap flex-shrink-0">최장 스트릭 일수</p>
            </>
          )}
        </div>
        <div>
          {users && users.content.length > 0 ? (
            users.content.map((item, idx) => (
              <Link
                href={`/profile/${item.username}`}
                className={`w-full h-14 ${
                  users.content.length - 1 !== idx && "border-b"
                } border-bg-border flex items-center text-base font-[400] px-6 text-main-container whitespace-nowrap`}
                key={item.id}
              >
                <p className="w-16 text-center whitespace-nowrap flex-shrink-0">{item.rank}</p>
                <p className="w-16 text-center flex-shrink-0">{idx+1}</p>
                <p className="flex-[1] px-4 whitespace-nowrap flex-shrink-0">{item.username}</p>
                {state === null ? (
                  <>
                    <p className="w-20 text-center whitespace-nowrap flex-shrink-0">레이팅</p>
                    <p className="w-28 text-center whitespace-nowrap max-sm:hidden flex-shrink-0">{item.solvedCount}</p>
                  </>
                ) : (
                  <>
                    <p className="w-32 text-center whitespace-nowrap flex-shrink-0">{item.maxStreak}</p>
                  </>
                )}
              </Link>
            ))
          ) : (
            <div className="w-full h-72 flex items-center justify-center">
              <p className="text-2xl text-bg-border">
                이런! 등록된 유저가 없습니다.
              </p>
            </div>
          )}
        </div>
      </div>
      <PageController
        page={page}
        setPage={setPage}
        data={users as PageResponse<User>}
      />
    </>
  )
}

export default RankingList