import { Card } from '@/components/ui/card'
import { CheckCircleIcon } from 'lucide-react'

interface FormSuccessProps {
  message?: string
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null

  return (
    <Card className="flex items-center justify-center gap-2 border-emerald-500/15 bg-emerald-500/15 p-2 text-sm font-medium text-emerald-500">
      <CheckCircleIcon className="w-4 h-4" />
      <p>{message}</p>
    </Card>
  )
}
