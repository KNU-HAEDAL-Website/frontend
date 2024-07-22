export type LoginDTO = {
  result: {
    data?: {
      message?: string
      status?: number
      token?: string
    }
    serverError?: string
  }
  validationErrors?: string
}
