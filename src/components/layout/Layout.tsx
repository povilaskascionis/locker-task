import { FC, ReactNode } from 'react'

import styles from './Layout.module.scss'
import { Link } from 'react-router-dom'
import { Path } from '@/router'

type Props = {
  children: ReactNode
  authorized?: boolean
}

const Layout: FC<Props> = ({ children, authorized }) => {
  return (
    <div className={styles.layout}>
      <nav className={styles.navigation}>
        <span className={styles.homeLink}>TesoServers</span>
      </nav>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default Layout
