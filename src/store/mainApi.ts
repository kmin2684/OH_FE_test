import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const mainApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://kmin2684.github.io/mock-api/oh_fe_test/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getCommunities: builder.query<any[], string>({
      query: () => `communities.json`,
    }),
    getHomes: builder.query({
      query: () => 'homes.json',
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetCommunitiesQuery,useGetHomesQuery } = mainApi