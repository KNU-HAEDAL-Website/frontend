import { AxiosError } from 'axios'

import { API_ERROR_MESSAGES } from '@/constant/errorMessage'

export function getErrorMessage(error: AxiosError): string {
  if (error.response) {
    switch (error.response.status) {
      case 404:
        return API_ERROR_MESSAGES.DATA_NOT_FOUND
      case 500:
        return API_ERROR_MESSAGES.SERVER_ERROR
      default:
        return API_ERROR_MESSAGES.FETCH_ERROR
    }
  }

  if (error.request) {
    return API_ERROR_MESSAGES.NETWORK_ERROR
  }

  return API_ERROR_MESSAGES.UNKNOWN_ERROR
}
