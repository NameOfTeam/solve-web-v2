import { Contest } from '@/types/contest/contest'
import { formatDate } from '@/utils/formatDate'
import { formatLeftTime } from '@/utils/formatLeftTime'
import React from 'react'

const ContestCard = () => {
  return (
    <div className='w-full h-64 px-7 py-9 relative flex flex-col justify-between border border-bg-border bg-container rounded-[8px]'>
      <div className='flex flex-col gap-y-2'>
        {/* <p className='text-[20px] font-[600]'>{data.title}</p>
        <p>{formatDate(data.startAt)}<br />~ {formatDate(data.endAt)}</p> */}
      </div>
      {/* <p>{ data.state === "UPCOMING" ? `${formatLeftTime(data.startAt)}` : data.state === "ENDED" ? "종료" : "진행중!"  }</p> */}
      <div className={`bg-primary-800 w-10 h-48 rotate-45 absolute bottom-[-60px] right-4`}></div>
    </div>
  )
}

export default ContestCard