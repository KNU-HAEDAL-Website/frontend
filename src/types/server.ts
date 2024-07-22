export type ServerAction = {
  result: {
    data?: {
      message?: string
      status?: number
    }
    serverError?: string
  }
  validationErrors?: string
}
