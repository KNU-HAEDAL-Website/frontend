import { Card } from '@/components/ui/card'

interface FormErrorProps {
  message?: string
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null

  return (
    <Card className="flex items-center justify-center border-destructive/10 bg-destructive/15 p-3 text-sm font-medium text-destructive">
      <p>{message}</p>
    </Card>
  )
}
