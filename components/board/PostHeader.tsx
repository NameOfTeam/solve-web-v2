import { Board } from '@/types/board/board';
import Link from 'next/link';
import React from 'react'
import ThemedIcon from '../ui/ThemedIcon';

const PostHeader = ({ postData }: { postData: Board }) => {
  return (
    <div className="w-full">
      <p className="max-w-[640px] w-full py-3 border-b border-bg-border text-[26px] font-[600]">
        {postData.title}
      </p>
      <div className="w-full flex items-center justify-between h-9">
        <div className="flex gap-x-4 items-center justify-space text-lg">
          <p># {postData.problem.id}</p>
          <Link
            href={`/users/${postData.author.username}`}
            className="text-info-500"
          >
            {postData.author.username}
          </Link>
        </div>
        <div
          className={`w-14 h-6 border ${
            postData.isLiked
              ? "border-primary-700 bg-primary-700"
              : "border-container-border bg-container"
          } self-end rounded-[4px] pl-1 pr-[6px] flex justify-between items-center`}
        >
          <ThemedIcon
            height={20}
            width={20}
            icon="like"
            color={postData.isLiked ? "white" : ""}
            variant="container"
            shade="border"
          />
          <p
            className={`text-xs ${
              postData.isLiked ? "text-white" : "text-container-border"
            }`}
          >
            {postData.likeCount}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostHeader