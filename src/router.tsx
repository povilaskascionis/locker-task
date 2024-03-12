import { ReactNode } from 'react'
import { useAppSelector } from './store/hooks'
import { Navigate, Route, Routes } from 'react-router-dom'

export enum Path {
  HOME = '/',
  SERVERS = '/servers',
  LOGIN = '/login',
}

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const userAuthorized = useAppSelector((state) => state.auth.authorized)

  if (!userAuthorized) {
    return <Navigate to={Path.HOME} />
  }

  return children
}

const Router = () => (
  <Routes>
    <Route index element={'HOME'} />
    <Route
      path={Path.SERVERS}
      element={<ProtectedRoute>SeRvERs</ProtectedRoute>}
    />
  </Routes>
)

export default Router
