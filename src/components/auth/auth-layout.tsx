import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface CardWraperProps {
  children: React.ReactNode
  headerTitle: string
}

export const AuthLayout = ({
  children,
  headerTitle,
}: CardWraperProps) => {
  return (
    <Card className="shadow-lg w-64 sm:w-80 md:w-96">
      <CardHeader>
        <CardTitle>{headerTitle}</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col items-start gap-2'>
        {children}
      </CardContent>
    </Card>
  )
}