import Layout from '@/components/layout/Layout'
import LoginForm from '@/components/loginForm/LoginForm'

const LoginScreen = () => {
  return (
    <Layout>
      <LoginForm
        onSubmit={async (data) => {
          throw new Error('invalid')
        }}
      />
    </Layout>
  )
}

export default LoginScreen
