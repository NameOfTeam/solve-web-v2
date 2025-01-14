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
  initialData,
  query,
}: {
  initialData: PageResponse<Board>;
  query?: string;
}) => {
  const [page, setPage] = useState(0);
  const boards = useGetBoardList({ page, query }, initialData);
  const router = useRouter();

  return (
    <>
      <div className="w-full h-full border border-bg-border bg-container rounded-lg">
        <div className="w-full h-16 border-b border-bg-border flex items-center text-lg font-[600] px-6 text-main-container">
          <p className="flex-[1] px-4 text-center">카테고리</p>
          <p className="flex-[1] px-4 text-center">#</p>
          <p className="flex-[8] px-4">제목</p>
          <p className="flex-[1.3] px-4 text-center">언어</p>
          <p className="flex-[1.3] px-4 text-center">글쓴이</p>
          <p className="flex-[1.7] px-4 text-center">작성일</p>
        </div>
        <div>
          {boards && boards.content.length > 0 ? (
            boards.content.map((item, idx) => (
              <Link
                href={`/boards/${item.id}`}
                className={`w-full h-14 ${
                  boards.content.length - 1 !== idx && "border-b"
                } border-bg-border flex items-center text-base font-[400] px-6 text-main-container`}
                key={item.id}
              >
                <p className="flex-[1] px-4 flex justify-center items-center">
                  {parseCategory(item.category)}
                </p>
                <p className="flex-[1] px-4 text-center">{item.id}</p>
                <p className="flex-[8] px-4 text-main-container">
                  {item.title}
                </p>
                <p className="flex-[1.3] px-4 text-center">{item.language}</p>
                <p
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/users/${item.author.username}`);
                  }}
                  className="flex-[1.3] px-4 text-center text-info-500"
                >
                  {item.author.username}
                </p>
                <p className="flex-[1.7] px-4 text-center">
                  {formatDate(item.createdAt)}
                </p>
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
