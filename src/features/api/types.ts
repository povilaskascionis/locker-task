export type LoginFormData = {
  username: string
  password: string
}

export type LoginResponse = {
  token: string
}

export type Servers = {
  name: string
  distance: number
}[]
