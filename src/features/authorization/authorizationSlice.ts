import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AUTH_TOKEN_STORAGE_KEY } from './constants'

export const authorizationSlice = createSlice({
  name: 'auth',
  initialState: {
    authorized: !!localStorage.getItem(AUTH_TOKEN_STORAGE_KEY),
  },
  reducers: {
    setAuthorized: (state, action: PayloadAction<string>) => {
      localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, action.payload)
      return {
        ...state,
        authorized: true,
      }
    },

    setUnauthorized: (state) => {
      localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY)
      return {
        ...state,
        authorized: false,
      }
    },
  },
})
