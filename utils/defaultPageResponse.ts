import { PageResponse } from "@/types/response/page"

export const defaultPageResponse = () : PageResponse<[]> => {
  return {
    content: [],
    pageable: {
      pageNumber: 0,
      pageSize: 0,
      sort: {
        empty: true,
        sorted: false,
        unsorted: true,
      },
      offset: 0,
      paged: false,
      unpaged: true,
    },
    last: true,
    totalElements: 0,
    totalPages: 0,
    first: false,
    size: 0,
    number: 0,
    sort: {
      empty: true,
      sorted: false,
      unsorted: true,
    },
    numberOfElements: 0,
    empty: true
  };
}