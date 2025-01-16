"use client";

import { API_URL } from "@/constants/api";
import { Comment } from "@/types/board/comment";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ThemedIcon from "../ui/ThemedIcon";
import { Reply } from "@/types/board/reply";
import { getReplies } from "@/api/board/getReplies";
import { useParams } from "next/navigation";
import { useUserStore } from "@/stores/user/useUserStore";

const CommentItem = ({ comment }: { comment: Comment }) => {
  const [viewReplies, setViewReplies] = useState(false);
  const [replies, setReplies] = useState<Reply[]>([]);
  const { postId } = useParams();
  const { user } = useUserStore();

  const fetchData = async () => {
    if (postId && comment.id) {
      console.log(postId, comment.id);
      const data = await getReplies(postId as string, comment.id);
      setReplies(data?.content || []);
    }
  };

  useEffect(() => {
    if (viewReplies) fetchData();
  }, [viewReplies]);

  return (
    <div className="w-full flex gap-x-4 py-4 text-main-container">
      <div className="w-12 h-12 rounded-full">
        <Image
          src={`${API_URL}/avatars/${comment.author.id}.webp`}
          alt="profile"
          width={48}
          height={48}
        />
      </div>
      <div className="flex-1 flex flex-col gap-y-2">
        <div className="text-lg flex gap-x-2 font-[400] items-center">
          <Link
            href={`/users/${comment.author.username}`}
            className="text-info-500"
          >
            {comment.author.username}
          </Link>
          <p className="text-base">6개월 전</p>
        </div>
        <div>{comment.content}</div>
        <div className="flex gap-x-2">
          <div
            onClick={() =>
              comment.replyCount > 0 && setViewReplies((prev) => !prev)
            }
            className="pl-[6px] pr-2 gap-x-1 rounded-[4px] flex justify-between items-center bg-container border-bg-border border cursor-pointer"
          >
            <ThemedIcon
              height={20}
              width={20}
              icon="chat-bubble"
              variant="main"
              shade="container"
            />
            <p className="text-xs text-main-container">
              {comment.replyCount || 0}
            </p>
          </div>
          {user?.id && (
            <div className="pl-[6px] pr-2 gap-x-1 rounded-[4px] flex justify-between items-center bg-container border-bg-border border cursor-pointer">
              <ThemedIcon
                height={20}
                width={20}
                icon="pen"
                variant="main"
                shade="container"
              />
              <p className="text-xs text-main-container">댓글 작성하기</p>
            </div>
          )}
          {user?.id === comment.author.id && (
            <div className="pl-[6px] pr-2 gap-x-1 rounded-[4px] flex justify-between items-center bg-container border-bg-border border cursor-pointer">
              <ThemedIcon
                height={20}
                width={20}
                icon="pen"
                variant="main"
                shade="container"
              />
              <p className="text-xs text-main-container">댓글 수정하기</p>
            </div>
          )}
          <div
            className={`w-14 h-6 border ${
              comment.isLiked
                ? "border-primary-700 bg-primary-700"
                : "border-container-border bg-container"
            } self-end rounded-[4px] pl-1 pr-[6px] flex justify-between items-center`}
          >
            <ThemedIcon
              height={20}
              width={20}
              icon="like"
              color={comment.isLiked ? "white" : ""}
              variant="container"
              shade="border"
            />
            <p
              className={`text-xs ${
                comment.isLiked ? "text-white" : "text-container-border"
              }`}
            >
              {comment.likeCount}
            </p>
          </div>
        </div>
        {viewReplies && (
          <div className="w-full">
            {replies.map((reply) => (
              <div
                className="w-full flex gap-x-4 py-4 text-main-container"
                key={reply.id}
              >
                <div className="w-12 h-12 rounded-full">
                  <Image
                    src={`${API_URL}/avatars/${reply.author.id}.webp`}
                    alt="profile"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-y-2">
                  <div className="text-lg flex gap-x-2 font-[400] items-center">
                    <Link
                      href={`/users/${reply.author.username}`}
                      className="text-info-500"
                    >
                      {reply.author.username}
                    </Link>
                    <p className="text-base">6개월 전</p>
                  </div>
                  <div>{reply.content}</div>
                  <div className="flex gap-x-2">
                    {user && (
                      <div className="pl-[6px] pr-2 gap-x-1 rounded-[4px] flex justify-between items-center bg-container border-bg-border border cursor-pointer">
                        <ThemedIcon
                          height={20}
                          width={20}
                          icon="pen"
                          variant="main"
                          shade="container"
                        />
                        <p className="text-xs text-main-container">
                          답글 작성하기
                        </p>
                      </div>
                    )}
                    {user?.id === reply.author.id && (
                      <div className="pl-[6px] pr-2 gap-x-1 rounded-[4px] flex justify-between items-center bg-container border-bg-border border cursor-pointer">
                        <ThemedIcon
                          height={20}
                          width={20}
                          icon="pen"
                          variant="main"
                          shade="container"
                        />
                        <p className="text-xs text-main-container">
                          답글 수정하기
                        </p>
                      </div>
                    )}

                    <div
                      className={`w-14 h-6 border ${
                        reply.isLiked
                          ? "border-primary-700 bg-primary-700"
                          : "border-container-border bg-container"
                      } self-end rounded-[4px] pl-1 pr-[6px] flex justify-between items-center`}
                    >
                      <ThemedIcon
                        height={20}
                        width={20}
                        icon="like"
                        color={reply.isLiked ? "white" : ""}
                        variant="container"
                        shade="border"
                      />
                      <p
                        className={`text-xs ${
                          reply.isLiked ? "text-white" : "text-container-border"
                        }`}
                      >
                        {reply.likeCount}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
