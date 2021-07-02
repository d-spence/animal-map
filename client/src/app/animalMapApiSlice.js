import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiUrl = 'http://localhost:5001/api/v1/';

export const animalMapApi = createApi({
  reducerPath: 'animalMapApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    getAnimals: builder.query({
      query: (data) => ({ 
        url: 'animals',
        method: 'GET',
        params: data,
      }),
    })
  })
});

export const { 
  useGetAnimalsQuery,
  useLazyGetAnimalsQuery,
} = animalMapApi;