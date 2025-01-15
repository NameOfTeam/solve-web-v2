import { getPostDetail } from "@/api/board/getBoardDetail";
import PostDetail from "@/components/board/PostDetail";
import React from "react";

const FreePost = async ({ params }: { params: Promise<{ postId: string }> }) => {
  const { postId } = await params;
  console.log(postId);
  const postData = await getPostDetail(postId);

  return <PostDetail postData={postData} />;
};

export default FreePost;
