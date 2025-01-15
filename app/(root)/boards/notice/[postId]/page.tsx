import { getPostDetail } from "@/api/board/getBoardDetail";
import PostDetail from "@/components/board/PostDetail";
import React from "react";

const NoticePost = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const { postId } = await params;
  const postData = await getPostDetail(postId);

  return <PostDetail postData={postData} />;
};

export default NoticePost;
