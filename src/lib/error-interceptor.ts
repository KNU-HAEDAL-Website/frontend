import { AxiosError } from 'axios'

import { backendApi } from '@/constant/api'
import LocalStorage from '@/constant/localStorage'

const errorInterceptor = async (error: AxiosError): Promise<unknown> => {
  if (error.response) {
    const status = error.response.status

    if (status === 401) {
      try {
        const accessToken = LocalStorage.getItem('accessToken')
        const res = await backendApi.post('/reissue', {
          headers: { Authorization: accessToken },
        })

        const origin = error.config
        if (origin) {
          const newAccessToken = res.headers['authorization']
          LocalStorage.setItem('accessToken', newAccessToken)
          origin.headers['Authorization'] = `Bearer` + res.data.accessToekn

          const retryRes = await backendApi(origin)
          return retryRes
        }
      } catch (reissueError) {
        return Promise.reject(reissueError)
      }
    }

    if (status === 404) {
      const code = error.response.data
      if (code === '008') {
        console.error('Refresh Token is null.')
      }
      if (code === '009') {
        // Refresh Token has expired.
        LocalStorage.clear()
      }
      if (code === '010') {
        console.error('Refresh Token is invalid')
      }
    }
  }
  return Promise.reject(error)
}

export default errorInterceptor
