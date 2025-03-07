"use client";

import { Board } from "@/types/board/board";
import React from "react";
import Markdown from "../editor/Markdown";
import PostHeader from "./PostHeader";
import PostComment from "./PostComment";

const PostDetail = ({ postData }: { postData?: Board }) => {
  if (!postData) {
    return <></>;
  }

  return (
    <div className="w-full py-6 flex flex-col gap-y-8 text-main-container">
      <PostHeader postData={postData} />
      <div className="w-full py-4 px-5 min-h-60 bg-container rounded">
        <Markdown content={postData.content} />
      </div>
      <PostComment postId={postData.id} />
    </div>
  );
};

export default PostDetail;
