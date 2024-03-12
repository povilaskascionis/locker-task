import Layout from '@/components/layout/Layout'
import LoginForm from '@/components/loginForm/LoginForm'
import { useAppSelector } from '@/store/hooks'

const MainScreen = () => {
  const authorized = useAppSelector((state) => state.auth.authorized)

  return <Layout authorized={authorized}>{null}</Layout>
}

export default MainScreen
