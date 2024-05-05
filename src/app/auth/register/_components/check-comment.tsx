import { cn } from '@/lib/utils'

interface CheckCommentProps {
  success: boolean | undefined
  message: string | undefined
}
export const CheckComment = ({ success, message }: CheckCommentProps) => {
  if (!message) return null

  return (
    <p className={cn(success ? 'text-blue-600' : 'text-red-600', 'text-sm')}>
      {message}
    </p>
  )
}
