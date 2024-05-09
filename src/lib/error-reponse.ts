import { AxiosError } from 'axios'
import { backendApi } from '@/constant/api'

interface errorResponseProps {
  error: AxiosError | Error
}

export const errorResponse = async ({
  error,
}: errorResponseProps): Promise<AxiosError> => {
  if (error instanceof AxiosError) {
    const status = error.response?.status
    const code = error.response?.data.code
    const origin = error.config

    if (status == 401) {
      if (code == '?') {
        // Access Token has expired.
        await backendApi
          .post('/reissue')
          .then((res) => {
            if (origin) {
              const accessToken = res.headers['authorization']
              localStorage.setItem('accessToken', accessToken)
              origin.headers['Authorization'] = `Bearer` + res.data.accessToken

              return backendApi(origin)
            }
          })
          .then(() => {
            window.location.reload()
          })
      }
    }
    if (status == 404) {
      if (code == '009') {
        // Refresh Token has expired.
        localStorage.clear()
      }
      if (code == '010' || code == '008') {
        //Refresh Token is invalid. Refresh Token is null.
      }
    }
  }

  return Promise.reject(error)
}
