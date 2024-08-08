export type PagaingRaw = {
  totalPages: number
  totalElements: number
  size: number
  number: number
  sort: [
    {
      direction: string
      nullHandling: string
      ascending: boolean
      property: string
      ignoreCase: boolean
    },
  ]
  numberOfElements: number
  pageable: {
    offset: number
    sort: [
      {
        direction: string
        nullHandling: string
        ascending: boolean
        property: string
        ignoreCase: boolean
      },
    ]
    pageSize: number
    paged: boolean
    pageNumber: number
    unpaged: boolean
  }
  first: boolean
  last: boolean
  empty: boolean
}

export type Paging = {
  nextPageToken?: string
  pageInfo: {
    totalPages: number
    totalElements: number
  }
}
