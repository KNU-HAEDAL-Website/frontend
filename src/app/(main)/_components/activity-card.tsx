import { forwardRef } from "react"

interface ActivityCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
}

export const ActivityCard = forwardRef<HTMLDivElement, ActivityCardProps>(
  ({ title }, ref) => {
    return (
      <div
        ref={ref}
        className="w-full h-80 py-2.5 bg-zinc-900 rounded-md flex-col justify-end items-center gap-2.5 inline-flex"
      >
        <div className="justify-center items-center inline-flex">
          <div className="text-center text-zinc-200 text-2xl font-semibold font-['Inter'] uppercase">
            {title}
          </div>
        </div>
      </div>
    )
  },
)

ActivityCard.displayName = 'ActivityCard'
