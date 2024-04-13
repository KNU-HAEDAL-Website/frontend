import { Card } from '@/components/ui/card'
import { AlertTriangleIcon } from 'lucide-react'

interface FormErrorProps {
  message?: string
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null

  return (
    <Card className="flex items-center justify-center gap-2 border-destructive/10 bg-destructive/15 p-2 text-sm font-medium text-destructive">
      <AlertTriangleIcon className="w-4 h-4" />
      <p>{message}</p>
    </Card>
  )
}

