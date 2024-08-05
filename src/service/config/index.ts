import { useAuthStore } from '@/store/auth'

import authErrorInterceptor from './authErrorInterceptor'
import { initInstance } from './instance'

export const BACKEND_API = initInstance({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

const AUTHORIZATION_API = initInstance({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
})

AUTHORIZATION_API.interceptors.request.use(
  (request) => {
    const { accessToken } = useAuthStore()

    if (accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`
    }

    return request
  },
  (error) => error,
)

AUTHORIZATION_API.interceptors.response.use(
  (response) => response,
  authErrorInterceptor,
)

export { AUTHORIZATION_API }
