import { FC, ReactNode } from 'react'

import styles from './Layout.module.scss'
import Sidebar from '../sidebar/Sidebar'
import { getNavigationLinks } from '@/router'

type Props = {
  children: ReactNode
  authorized?: boolean
}

const Layout: FC<Props> = ({ children, authorized }) => {
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
