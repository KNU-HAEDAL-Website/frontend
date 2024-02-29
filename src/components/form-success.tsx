import { Card } from '@/components/ui/card'

interface FormSuccessProps {
  message?: string
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null

  return (
    <Card className="flex items-center justify-center border-emerald-500/15 bg-emerald-500/15 p-3 text-sm font-medium text-emerald-500">
      <p>{message}</p>
    </Card>
  )
}
