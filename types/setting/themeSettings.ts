export interface ThemeList {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  background: string;
  backgroundBorder: string;
  container: string;
  containerBorder: string;
  main: string;
  price: number;
  isPurchasable: boolean;
  has: boolean;
}

export interface ThemeResponse<T> {
  totalPages: number;
  totalElements: number;
  first: boolean;
  last: boolean;
  size: number;
  content: T[];
  number: number;
  sort: [
    {
      direction: string;
      nullHandling: string;
      ascending: boolean;
      property: string;
      ignoreCase: boolean;
    }
  ];
  pageable: {
    offset: number;
    sort: [
      {
        direction: string;
        nullHandling: string;
        ascending: boolean;
        property: string;
        ignoreCase: boolean;
      }
    ];
    pageSize: number;
    unpaged: boolean;
    paged: boolean;
    pageNumber: number;
  };
  numberOfElements: number;
  empty: boolean;
}
