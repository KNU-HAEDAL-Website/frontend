import { ReactNode } from 'react'

type AuthCardProps = {
  title: string
  children: ReactNode
}

export const AuthCard = ({ title, children }: AuthCardProps) => {
  return (
    <div className="flex w-3/4 max-w-96 flex-col rounded-xl border bg-card text-card-foreground md:w-2/3">
      <div className="flex justify-center py-3 font-semibold">{title}</div>
      <div className="flex w-full flex-col items-start gap-2 px-6">
        {children}
      </div>
    </div>
  )
}
