import { cn } from '@/lib/utils'

interface DotProps {
  delay: number
}

const Dot = ({ delay }: DotProps) => {
  const style = {
    animationDelay: `${delay}ms`,
  }

  return (
    <span
      className={cn('w-3 h-3 rounded-full bg-primary animate-sync')}
      style={style}
    ></span>
  )
}

export const LoadingDots = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <Dot delay={0} />
      <Dot delay={70} />
      <Dot delay={140} />
    </div>
  )
}
