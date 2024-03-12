import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'

import {
  useGetServersQuery,
  usePostCredentialsMutation,
} from '@/features/api/apiSlice'
import '@/styles/_index.scss'

import Router from './router'

const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)

export default App
