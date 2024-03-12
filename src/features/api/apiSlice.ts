import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { AUTH_TOKEN_STORAGE_KEY } from '@/features/authorization/constants'

import { BASE_API_URL } from './constants'
import { LoginFormData, LoginResponse, Servers } from './types'

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    postCredentials: builder.mutation<LoginResponse, LoginFormData>({
      query: (credentials: LoginFormData) => ({
        url: '/tokens',
        method: 'POST',
        body: credentials,
      }),
    }),
    getServers: builder.query<Servers, void>({
      query: () => ({
        url: '/servers',
        headers: {
          authorization: localStorage.getItem(AUTH_TOKEN_STORAGE_KEY) ?? '',
        },
      }),
    }),
  }),
})

export const { usePostCredentialsMutation, useGetServersQuery } = apiSlice
