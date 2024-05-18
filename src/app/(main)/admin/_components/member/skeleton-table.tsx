import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'

export const SkeletonTable = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-end space-x-2">
        <Skeleton className="w-6 h-6 bg-secondary" />
        <Skeleton className="w-40 h-6 bg-secondary/80" />
      </div>
      <div className="flex items-center justify-around w-full h-10 ">
        <Skeleton className="h-6 w-20 md:w-24" />
        <Skeleton className="h-6 w-32 md:w-40" />
        <Skeleton className="h-6 w-24 md:w-32" />
        <Skeleton className="h-6 md:w-32 lg:w-52" />
      </div>
      <Separator className="w-full h-[1px] bg-border" />
      <div className="flex flex-col">
        <Skeleton className="h-5 w-full my-2" />
        <Skeleton className="h-5 w-full my-2" />
        <Skeleton className="h-5 w-full my-2" />
      </div>
      <div className="flex justify-center pt-2">
        <Skeleton className="w-1/6 h-6 bg-primary/40" />
      </div>
    </div>
  )
}
