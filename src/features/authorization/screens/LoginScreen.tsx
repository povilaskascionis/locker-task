import Layout from '@/components/layout/Layout'
import LoginForm from '@/components/loginForm/LoginForm'
import { usePostCredentialsMutation } from '@/features/api/apiSlice'
import { LoginFormData } from '@/features/api/types'
import { RouterPath } from '@/router'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { Navigate, useNavigate } from 'react-router-dom'
import { authorizationSlice } from '@/features/authorization/authorizationSlice'

const LoginScreen = () => {
  const authorized = useAppSelector((state) => state.auth.authorized)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [submitCredentials] = usePostCredentialsMutation()

  const handleSubmit = async (data: LoginFormData) => {
    const result = await submitCredentials(data).unwrap()

    dispatch(authorizationSlice.actions.setAuthorized(result.token))
    navigate(RouterPath.SERVERS)
  }

  if (authorized) {
    return <Navigate to={RouterPath.SERVERS} />
  }

  return (
    <Layout>
      <LoginForm onSubmit={handleSubmit} />
    </Layout>
  )
}

export default LoginScreen
