"use client"

import React from 'react'

const Status = () => {
  return (
    <div className="flex-1 bg-container rounded-lg px-4 py-6 overflow-y-scroll">
      <div className="w-full px-4 pb-2 flex justify-between text-sm border-b border-bg-border">
        <p className="font-[400] text-bg-border">
          {`0개의 제출`}
        </p>
        <p className="font-[600] cursor-pointer" onClick={() => {}}>새로고침</p>
      </div>
      
      <div className="w-full h-9 flex items-center text-sm font-[600] border-b border-bg-border whitespace-nowrap">
        <p className="flex-[8] px-4">상태</p>
        <p className="w-16 text-center">언어</p>
        <p className="w-16 text-center">메모리</p>
        <p className="w-16 text-center">시간</p>
      </div>
    </div>
  )
}

export default Status