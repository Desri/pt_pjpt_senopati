export interface Login {
  username: string;
  password: string;
}

export interface ResponseLogin {
  data: {
    username: string
    role: string
  },
  success: boolean
}
