import { cn } from '@/lib/utils'
import { CheckRespose } from '@/service/server/signup'

type CheckResultMessageProps = {
  checkResult: CheckRespose
}

export const CheckResultMessage = ({
  checkResult,
}: CheckResultMessageProps) => {
  if (!checkResult.message) return null

  return (
    <p
      className={cn(
        checkResult.success ? 'text-blue-600' : 'text-red-600',
        'text-sm',
      )}
    >
      {checkResult.message}
    </p>
  )
}
