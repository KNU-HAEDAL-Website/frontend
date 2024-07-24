import { ReactNode } from 'react'

export const Content = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto flex h-full max-w-screen-2xl justify-center">
      {children}
    </div>
  )
}
