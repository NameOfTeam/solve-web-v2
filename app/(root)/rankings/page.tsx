import { getUsers } from '@/api/user/getUsers'
import RankingList from '@/components/ranking/RankingList'
import { PageResponse } from '@/types/response/page'
import { User } from '@/types/user/user'
import React from 'react'

const Rankings = async ({
  searchParams,
}: {
  searchParams?:
    | Promise<{ [key: string]: string | string[] | undefined }>
    | undefined;
}) => {
  const query = (await searchParams)?.query;
  const initialData = await getUsers(
    0,
    20,
    query as string
  )
  return (
    <RankingList query={query as string | undefined} initialData={initialData as PageResponse<User>} state={null}/>
  )
}

export default Rankings