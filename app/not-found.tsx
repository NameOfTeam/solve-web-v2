import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div className='flex h-screen flex-col items-center'>
      <Header />
      <div className='flex flex-col items-center justify-center gap-12 w-72% h-except-header'>
        <div className='flex flex-col items-center gap-4'>
          <p className='text-danger-500 font-[700] text-4xl'>404 Page Not Found</p>
          <div className='gap-1 flex flex-col items-center font-[400] text-main-container'>
            <p>음, 아쉽지만 여긴 아무것도 없네요.</p>
            <p>다시 찾아보시는건 어떨까요?</p>
          </div>
        </div>
        <Link href={'/'} className='bg-bg px-6 py-3 rounded-lg hover:shadow-[0px_0px_8px_2px_rgba(0,_0,_0,_0.07)] transition-shadow text-main-container'>홈으로 돌아가기 →</Link>
      </div>
      <Footer />
    </div>
  )
}

export default notFound