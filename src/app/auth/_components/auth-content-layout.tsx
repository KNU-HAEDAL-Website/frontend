import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface CardWraperProps {
  children: React.ReactNode
  headerTitle: string
  className?: string
}

export const AuthContentLayout = ({
  children,
  className,
  headerTitle,
}: CardWraperProps) => {
  return (
    <Card className={cn('w-3/4 md:w-2/3 max-w-96', className)}>
      <CardHeader>
        <CardTitle className="flex justify-center">{headerTitle}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-2">
        {children}
      </CardContent>
    </Card>
  )
}
