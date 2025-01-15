import { getProblemDetail } from '@/api/problem/getProblemDetail';
import React from 'react'

const SolveDetail = async ({ params }: { params: Promise<{ problemId: string }> }) => {
  const { problemId } = await params;
  const problemData = await getProblemDetail(problemId);
  
  return (
    <div>{problemData && problemData.content}</div>
  )
}

export default SolveDetail