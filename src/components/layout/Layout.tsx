import { FC, ReactNode } from 'react'

import styles from './Layout.module.scss'
import { Link } from 'react-router-dom'
import { Path } from '@/router'
import Sidebar from '../sidebar/Sidebar'

type Props = {
  children: ReactNode
  authorized?: boolean
}

const Layout: FC<Props> = ({ children, authorized }) => {
  return (
    <div className={styles.layout}>
      <nav className={styles.navigation}>
        <span className={styles.homeLink}>TesoServers</span>
        <Sidebar>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
        </Sidebar>
      </nav>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default Layout
