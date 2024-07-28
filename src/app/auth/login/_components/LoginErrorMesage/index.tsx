import { ErrorMessageBox } from '@/components/MessageBox'

type LoginProps = {
  result: {
    data?: {
      message?: string
      status?: number
      token?: string
    }
    serverError?: string
    validationErrors?: Record<string, string[] | undefined> | undefined
  }
}

export const LoginErrorMessage = ({ result }: LoginProps) => {
  const { serverError, validationErrors, data } = result

  const validationError =
    (validationErrors &&
      Object.values(validationErrors).flatMap((error) => error)[0]) ||
    ''

  if (serverError) {
    return <ErrorMessageBox message={serverError} />
  }

  if (validationError) {
    return <ErrorMessageBox message={validationError} />
  }

  if (data?.message) {
    return <ErrorMessageBox message={data.message} />
  }
}
