"use client"

import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const MainMenu = ({ icon, title, href }: { icon: string, title: string, href: string }) => {
  return (
    <Link className="px-3 py-5 flex flex-col gap-y-2 items-center justify-center cursor-pointer" href={href}>
      <div className='border-[1.2px] border-bg-border p-3 rounded-lg bg-container mx-4'>
        <Image width={48} height={48} alt="" src={icon} />
      </div>
      <p className="text-[16px] font-[600]">{title}</p>
    </Link>
  );
}

export default MainMenu