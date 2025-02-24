"use client";

import { Board } from "@/types/board/board";
import { PageResponse } from "@/types/response/page";
import Link from "next/link";
import React, { useState } from "react";
import PageController from "../ui/PageController";
import useGetBoardList from "@/hooks/board/useGetBoardList";
import { formatDate } from "@/utils/formatDate";
import { useRouter } from "next/navigation";
import { parseCategory } from "@/utils/parseCategory";

const BoardList = ({
  state,
  initialData,
  query,
}: {
  state: "FREE" | "NOTICE" | "QUESTION" | "SUGGESTION" | "INFORMATION" | null;
  initialData: PageResponse<Board>;
  query?: string;
}) => {
  const [page, setPage] = useState(0);
  const boards = useGetBoardList({ page, query }, state, initialData);
  const router = useRouter();

  return (
    <>
      <div className="w-full h-full bg-container rounded-lg">
        <div className="w-full h-16 border-b border-bg-border flex items-center text-base font-[600] px-6 text-main-container">
          <p className="w-20 text-center whitespace-nowrap flex-shrink-0 max-sm:hidden">카테고리</p>
          <p className="w-14 text-center flex-shrink-0 max-lg:hidden">#</p>
          <p className="flex-[1] pl-4 whitespace-nowrap flex-shrink-0">제목</p>
          <p className="w-28 whitespace-nowrap flex-shrink-0 text-center max-md:hidden">언어</p>
          <p className="w-32 text-center whitespace-nowrap flex-shrink-0">글쓴이</p>
          <p className="w-32 text-center whitespace-nowrap flex-shrink-0 max-lg:hidden">작성일</p>
        </div>
        <div>
          {boards && boards.content.length > 0 ? (
            boards.content.map((item, idx) => (
              <Link
                href={`/boards/${item.category.toLocaleLowerCase()}/${item.id}`}
                className={`w-full h-14 ${
                  boards.content.length - 1 !== idx && "border-b"
                } border-bg-border flex items-center text-base font-[400] px-6 text-main-container whitespace-nowrap`}
                key={item.id}
              >
                <p className="w-20 flex justify-center items-center">
                  {parseCategory(item.category)}
                </p>
                <p className="w-14 text-center max-lg:hidden">{item.id}</p>
                <p className="flex-[8] px-4 text-main-container overflow-hidden text-ellipsis">{item.title}</p>
                <p className="w-28 text-center max-md:hidden">{item.language}</p>
                <p
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/users/${item.author.username}`);
                  }}
                  className="w-32 text-center text-info-500"
                >
                  {item.author.username}
                </p>
                <p className="w-32 text-center max-lg:hidden">{formatDate(item.createdAt)}</p>
              </Link>
            ))
          ) : (
            <div className="w-full h-72 flex items-center justify-center">
              <p className="text-2xl text-bg-border">
                등록된 게시글이 없습니다.
              </p>
            </div>
          )}
        </div>
      </div>
      <PageController
        page={page}
        setPage={setPage}
        data={boards as PageResponse<Board>}
      />
    </>
  );
};

export default BoardList;
