import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { community, home} from '../data_types/data_types'

export const mainApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://kmin2684.github.io/mock-api/oh_fe_test/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getCommunities: builder.query({
      query: (key: string) => `communities.json`,
    }),
    getHomes: builder.query({
      query: (key: string) => 'homes.json',
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetCommunitiesQuery,useGetHomesQuery } = mainApi