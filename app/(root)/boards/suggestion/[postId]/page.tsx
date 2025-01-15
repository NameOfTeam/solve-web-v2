import { getPostDetail } from "@/api/board/getPostDetail";
import PostDetail from "@/components/board/PostDetail";
import React from "react";

const SuggestionPost = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const { postId } = await params;
  const postData = await getPostDetail(postId);

  return <PostDetail postData={postData} />;
};

export default SuggestionPost;
