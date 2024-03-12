import { LoginFormData } from '@/features/api/types'
import { FC, useState } from 'react'

import Button from '@/components/button/Button'

import FormTextInput from '../inputs/FormTextInput'

import styles from './LoginForm.module.scss'

type Props = {
  onSubmit: (data: LoginFormData) => Promise<void>
}

const LoginForm: FC<Props> = ({ onSubmit }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async () => {
    setError('')
    setSubmitting(true)

    try {
      await onSubmit({ username, password })
    } catch (e) {
      setError('Invalid password')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form autoComplete="off" className={styles.formContainer}>
      <FormTextInput
        name="username"
        type="text"
        onChange={setUsername}
        value={username}
        label="Username"
      />
      <FormTextInput
        name="password"
        type="password"
        onChange={setPassword}
        value={password}
        label="Password"
        error={error}
      />
      <Button
        onClick={handleSubmit}
        disabled={!username || !password}
        loading={submitting}
        type="button"
      >
        Log In
      </Button>
    </form>
  )
}

export default LoginForm
