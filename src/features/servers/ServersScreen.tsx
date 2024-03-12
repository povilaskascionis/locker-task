import { useGetServersQuery } from '../api/apiSlice'
import { Server } from '../api/types'

const ServersScreen = () => {
  const servers = useGetServersQuery()
}

export default ServersScreen
