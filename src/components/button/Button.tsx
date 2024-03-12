import classNames from 'classnames'
import { FC, ReactNode } from 'react'

import styles from './Button.module.scss'
import Spinner from '../spinner/Spinner'

type Props = {
  children: ReactNode
  onClick: () => void
  type?: HTMLButtonElement['type']
  disabled?: boolean
  loading?: boolean
}

const Button: FC<Props> = ({
  children,
  onClick,
  type = 'button',
  disabled,
  loading,
}) => {
  const className = classNames(styles.button, disabled && styles.disabled)

  return (
    <button onClick={onClick} type={type} className={className}>
      {loading ? <Spinner /> : children}
    </button>
  )
}

export default Button
