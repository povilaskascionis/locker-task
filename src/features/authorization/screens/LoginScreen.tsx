import Layout from '@/components/layout/Layout'
import LoginForm from '@/components/loginForm/LoginForm'
import { RouterPath } from '@/router'
import { useAppSelector } from '@/store/hooks'
import { Navigate } from 'react-router-dom'

const LoginScreen = () => {
  const authorized = useAppSelector((state) => state.auth.authorized)

  if (authorized) {
    return <Navigate to={RouterPath.SERVERS} />
  }

  return (
    <Layout>
      <LoginForm
        onSubmit={async (data) => {
          console.log(data)
          throw new Error('invalid')
        }}
      />
    </Layout>
  )
}

export default LoginScreen
