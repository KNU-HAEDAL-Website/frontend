import axios from 'axios'
import { errorResponse } from '@/lib/error-reponse'
import { successResponse } from '@/lib/sucssess-response'

const backendApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
})

const authorizationApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
})
authorizationApi.interceptors.response.use(successResponse, errorResponse)

export { backendApi, authorizationApi }
