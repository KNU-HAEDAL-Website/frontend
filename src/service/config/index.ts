import { AxiosError } from 'axios'

import { getErrorMessage } from './errorHandler'
import { initInstance } from './instance'

export const BACKEND_API = initInstance({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

BACKEND_API.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const customError = new Error(getErrorMessage(error))
    return Promise.reject(customError)
  },
)
