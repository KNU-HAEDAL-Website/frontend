import { Card } from '@/components/ui/card'

interface FormSuccessProps {
  message?: string
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null

  return (
    <Card className="p-3 flex items-center justify-center bg-emerald-500/15 text-emerald-500 border-emerald-500/15 text-sm font-medium">
      <p>{message}</p>
    </Card>
  )
}
