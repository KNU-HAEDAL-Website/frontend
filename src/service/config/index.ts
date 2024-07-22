import { initInstance } from './instance'

export const BACKEND_API = initInstance({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})
