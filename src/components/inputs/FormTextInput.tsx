import { ChangeEvent, FC, ReactEventHandler, SyntheticEvent } from 'react'

import styles from './FormTextInput.module.scss'
import classNames from 'classnames'

type Props = {
  name: HTMLInputElement['name']
  type: HTMLInputElement['type']
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
}

const FormTextInput: FC<Props> = ({
  name,
  label,
  type,
  onChange,
  value,
  error,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    onChange(event.target.value)
  }

  const containerClassName = classNames(
    styles.container,
    !!error && styles.withError,
  )

  return (
    <div className={containerClassName}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        className={styles.input}
      />
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  )
}

export default FormTextInput
