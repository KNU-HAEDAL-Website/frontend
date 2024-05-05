import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface CardWraperProps {
  children: React.ReactNode
  headerTitle: string
}

export const RegisterLayout = ({ children, headerTitle }: CardWraperProps) => {
  return (
    <Card className="w-3/4 md:w-2/3 max-w-96">
      <CardHeader>
        <CardTitle className="flex justify-center">{headerTitle}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-2">
        {children}
      </CardContent>
    </Card>
  )
}
