import { Navigate } from 'react-router-dom'

import { RouterPath } from '@/router'
import { useAppDispatch } from '@/store/hooks'
import { authorizationSlice } from '../authorizationSlice'

const LogoutScreen = () => {
  const dispatch = useAppDispatch()
  dispatch(authorizationSlice.actions.setUnauthorized())

  return <Navigate to={RouterPath.LOGIN} />
}

export default LogoutScreen
