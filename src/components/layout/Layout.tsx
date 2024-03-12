import { FC, ReactNode } from 'react'

import styles from './Layout.module.scss'
import Sidebar from '../sidebar/Sidebar'
import { getNavigationLinks } from '@/router'
import { useAppSelector } from '@/store/hooks'

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  const authorized = useAppSelector((state) => state.auth.authorized)
  const links = getNavigationLinks(authorized).map((Link) => Link)

  return (
    <div className={styles.layout}>
      <nav className={styles.navigation}>
        <span className={styles.homeLink}>TesoServers</span>
        <div className={styles.navbarLinks}>{links}</div>
        <Sidebar>{links}</Sidebar>
      </nav>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default Layout
