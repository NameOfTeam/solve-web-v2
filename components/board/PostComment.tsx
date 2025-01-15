"use client";

import { getComments } from "@/api/board/getComments";
import { Comment } from "@/types/board/comment";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CommentItem from "./CommentItem";
import { useUserStore } from "@/stores/user/useUserStore";
import { createComment } from "@/api/board/createComment";

const PostComment = ({ postId }: { postId: number }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitting },
    setValue
  } = useForm<{ content: string }>({ defaultValues: { content: "" } });
  const { user } = useUserStore();

  const fetchData = async () => {
    const data = await getComments(postId);
    setComments(data || []);
  };

  const onSubmit = async (e: { content: string }) => {
    const data = await createComment(e, postId);
    if (data) {
      setValue("content", "");
      setComments(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, [postId]);

  return (
    <div className="w-full flex flex-col gap-y-4">
      <p className="text-lg">댓글 {comments.length}개</p>
      <div className="w-full flex flex-col gap-y-4 py-4 border-b border-t border-bg-border">
        {user?.id && (
          <form
            className="w-full flex gap-x-4 items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              className="px-4 py-2 text-base placeholder:text-bg-border border-b border-bg-border flex-1 outline-none bg-transparent"
              placeholder="댓글을 입력하세요."
              {...register("content", {
                required: true,
                minLength: 1,
              })}
            />
            <button
              disabled={!isValid || isSubmitting}
              className="self-end w-[72px] h-9 text-lg text-white bg-primary-600 disabled:bg-bg-border disabled:cursor-not-allowed rounded-lg cursor-pointer"
            >
              게시
            </button>
          </form>
        )}
        <div className="w-full">
          {comments.map((comment) => (
            <CommentItem comment={comment} key={comment.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostComment;
