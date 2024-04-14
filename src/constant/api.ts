import axios from 'axios'

export const backendApi = axios.create({
  baseURL: process.env.BASE_URL,
  withCredentials: true,
})
