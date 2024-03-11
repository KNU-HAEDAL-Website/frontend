import React from 'react'

interface DetailTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  line: string
}

export const DetailText = React.forwardRef<HTMLDivElement, DetailTextProps>(
  ({ children, line }, ref) => {
    return (
      <>
        {/* 태그가 1줄만 필요할 때 */}
        {line === '1' ? (
          <div
            ref={ref}
            className="text-slate-900 md:text-3xl text-2xl font-bold font-['Sen'] leading-10"
          >
            {children}
          </div>
        ) : (
          // 태그가 2줄 이상 필요로 할 때 (감싸는 태그 필요할때)
          <div ref={ref} className="justify-center items-center flex">
            <div className="text-slate-900 md:text-3xl text-2xl font-bold font-['Sen'] leading-10">
              {children}
            </div>
          </div>
        )}
      </>
    )
  },
)

DetailText.displayName = 'DetailText'
