import axios from 'axios'
import errorInterceptor from '@/lib/error-interceptor'

const backendApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
})

const authorizationApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
})
authorizationApi.interceptors.response.use(
  response => {
    return response
  },
  errorInterceptor
)

export { backendApi, authorizationApi }
