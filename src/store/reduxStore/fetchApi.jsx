// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// initialize an empty api service that we'll inject endpoints into later as needed
export const fetchApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/.netlify/functions',
    // baseUrl: 'https://api.themoviedb.org/3/',
  }),
  endpoints: (builder) => ({
    // fetchTopRatedTVShows: builder.query({
    //   query: () =>
    //     `fetch-movies?startingParams=${'tv/top_rated'}&categoryParams=${''}&id${''}&page=${'1'}&searchQuery=${''}&others${''}`,
    // }),

    fetchPopularMoviesForYear2022: builder.query({
      query: () =>
        `fetch-movies?startingParams=${'movie/popular'}&gte=${'2022-01-01'}&lte${'2022-12-31'}&page=${'1'}`
    }),

    // //! FOR FETCHING TV SHOWS DETAILS
    // fetchTVShowDetails: builder.query({
    //   query: (tvId) =>
    ////this needs to be fixed!!!
    //     `tv/${tvId}?api_key=8e6ba047d3bc0b9dddf8392f32410006&language=en-US`,
    // }),
    // fetchTVShowReviews: builder.query({
    //   query: (tvId) =>
    //     `fetch-movies?startingParams=${'tv'}&categoryParams=${'reviews'}&id${tvId}&page=${'1'}&searchQuery=${''}&others${''}`,
    // }),
  }),
});
export const {
  useFetchPopularMoviesForYear2022Query
  // useFetchTVShowDetailsQuery,

  // useFetchTVShowReviewsQuery,

  // useUpdateTaskMutation
} = fetchApi;
