import React from "react";

const Post = async ({ params }: { params: Promise<{ postId: string }> }) => {
  const { postId } = await params;

  return <div>{postId}</div>;
};

export default Post;
