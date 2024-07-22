import { ServerAction } from '@/types/server'

import { ErrorMessageBox } from '@/components/MessageBox'

interface LoginErrorMessageProps extends ServerAction {
  validationError: string
}

export const LoginErrorMessage = ({
  result,
  validationError,
}: LoginErrorMessageProps) => {
  const { data, serverError } = result

  if (serverError) {
    return <ErrorMessageBox message={serverError} />
  }

  if (validationError) {
    return <ErrorMessageBox message={validationError} />
  }

  if (data?.status != 200 && data?.message) {
    return <ErrorMessageBox message={data.message} />
  }
}
