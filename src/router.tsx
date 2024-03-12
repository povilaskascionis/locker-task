import { ReactNode } from 'react'
import { useAppSelector } from './store/hooks'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import LoginScreen from './features/authorization/screens/LoginScreen'
import LogoutScreen from './features/authorization/screens/LogoutScreen'
import MainScreen from './features/authorization/screens/MainScreen'
import ServersScreen from './features/servers/ServersScreen'

export enum RouterPath {
  HOME = '/',
  SERVERS = '/servers',
  LOGIN = '/login',
  LOGOUT = '/logout',
}

export const getNavigationLinks = (authorized?: boolean) =>
  [
    <Link key={RouterPath.HOME} to={RouterPath.HOME}>
      Main
    </Link>,
    !authorized && (
      <Link key={RouterPath.LOGIN} to={RouterPath.LOGIN}>
        Login
      </Link>
    ),
    authorized && (
      <Link key={RouterPath.SERVERS} to={RouterPath.SERVERS}>
        Servers
      </Link>
    ),
    authorized && (
      <Link key={RouterPath.LOGOUT} to={RouterPath.LOGOUT}>
        Logout
      </Link>
    ),
  ].filter(Boolean)

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const userAuthorized = useAppSelector((state) => state.auth.authorized)

  if (!userAuthorized) {
    return <Navigate to={RouterPath.HOME} />
  }

  return children
}

const Router = () => (
  <Routes>
    <Route index element={<MainScreen />} />
    <Route path={RouterPath.LOGIN} element={<LoginScreen />} />
    <Route
      path={RouterPath.SERVERS}
      element={
        <ProtectedRoute>
          <ServersScreen />
        </ProtectedRoute>
      }
    />
    <Route path={RouterPath.LOGOUT} element={<LogoutScreen />} />
    <Route path="/*" element={<Navigate to={RouterPath.HOME} />} />
  </Routes>
)

export default Router
