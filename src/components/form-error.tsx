import { Card } from '@/components/ui/card'

interface FormErrorProps {
  message?: string
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null

  return (
    <Card className="p-3 flex items-center justify-center bg-destructive/15 text-destructive border-destructive/10 text-sm font-medium">
      <p>{message}</p>
    </Card>
  )
}
