import { ServerAction } from '@/types/server'

import { ErrorMessageBox } from '@/components/MessageBox'

interface DisplayServerActionCalloutProps extends ServerAction {
  validationError: string
}

export const DisplayServerActionCallout = ({
  result,
  validationError,
}: DisplayServerActionCalloutProps) => {
  const { data, serverError } = result

  if (data?.status != 200 && data?.message) {
    return <ErrorMessageBox message={data.message} />
  }

  if (serverError) {
    return <ErrorMessageBox message={serverError} />
  }

  if (validationError) {
    return <ErrorMessageBox message={validationError} />
  }
}
