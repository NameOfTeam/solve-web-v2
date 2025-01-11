import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-gray-400 pt-16 pb-20 px-48">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-5 gap-x-4 mb-20">
          <div className="flex flex-col gap-y-3">
            <h3 className="text-white mb-2 text-base font-medium">SOLVE</h3>
            <Link href="/discord" className="hover:text-white text-sm">
              디스코드
            </Link>
            <Link href="/blog" className="hover:text-white text-sm">
              Tech Blog
            </Link>
            <Link href="/about" className="hover:text-white text-sm">
              소개
            </Link>
            <Link href="/terms" className="hover:text-white text-sm">
              이용약관
            </Link>
            <Link href="/privacy" className="hover:text-white text-sm">
              개인정보 처리방침
            </Link>
          </div>

          <div className="flex flex-col gap-y-3">
            <h3 className="text-white mb-2 text-base font-medium">문제들</h3>
            <Link href="/problems" className="hover:text-white text-sm">
              전체 문제
            </Link>
            <Link href="/workbooks" className="hover:text-white text-sm">
              문제집
            </Link>
            <Link href="/categories" className="hover:text-white text-sm">
              분류
            </Link>
            <Link href="/ungraded" className="hover:text-white text-sm">
              채점하지 않은 문제
            </Link>
          </div>

          <div className="flex flex-col gap-y-3">
            <h3 className="text-white mb-2 text-base font-medium">대회</h3>
            <Link
              href="/official-contests"
              className="hover:text-white text-sm"
            >
              공식 대회
            </Link>
            <Link href="/club-contests" className="hover:text-white text-sm">
              동아리 대회
            </Link>
          </div>

          <div className="flex flex-col gap-y-3">
            <h3 className="text-white mb-2 text-base font-medium">상점</h3>
            <Link href="/usage-history" className="hover:text-white text-sm">
              이용내역
            </Link>
            <Link href="/coin-shop" className="hover:text-white text-sm">
              코인 상점
            </Link>
            <Link href="/limited-exchange" className="hover:text-white text-sm">
              한정 교환소
            </Link>
            <Link href="/storage" className="hover:text-white text-sm">
              보관소
            </Link>
          </div>

          <div className="flex flex-col gap-y-3">
            <h3 className="text-white mb-2 text-base font-medium">채점 현황</h3>
            <Link href="/judging-status" className="hover:text-white text-sm">
              채점 현황
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-y-1 text-sm">
          <h2 className="text-white font-medium mb-2">Solve - (슬로건 삽입)</h2>
          <p>대표: 진민오</p>
          <p>전화번호: 010-2222-2222</p>
          <p>이메일: example@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
