import { getContestSearch } from "@/api/contest/getContestSearch";
import ContestList from "@/components/contest/ContestList";
import React from "react";
import { PageResponse } from "@/types/response/page";
import { Contest } from "@/types/contest/contest";

const OngoingContests = async ({
  searchParams,
}: {
  searchParams?:
    | Promise<{ [key: string]: string | string[] | undefined }>
    | undefined;
}) => {
  const query = (await searchParams)?.query;
  const initialData = await getContestSearch(0, 15, "ONGOING", query as string);

  return (
    <ContestList
      query={query as string | undefined}
      initialData={initialData as PageResponse<Contest>}
      state="ONGOING"
    />
  );
};

export default OngoingContests;
