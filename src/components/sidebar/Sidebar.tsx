import classNames from 'classnames'
import { FC, ReactNode, useState } from 'react'

import styles from './Sidebar.module.scss'

type Props = {
  children: ReactNode
}

const Sidebar: FC<Props> = ({ children }) => {
  const [expanded, setExpanded] = useState(false)

  const className = classNames(styles.sidebar, expanded && styles.expanded)

  return (
    <div className={className}>
      <div
        className={styles.burger}
        role="button"
        tabIndex={0}
        onClick={() => setExpanded((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </div>
      <div className={styles.links}>{children}</div>
    </div>
  )
}

export default Sidebar
