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
            className="text-slate-900 text-3xl font-bold font-['Sen'] leading-10"
          >
            {children}
          </div>
        ) : (
          // 들어갈 내용이 1개 이상일때
          <div ref={ref} className="justify-center items-center flex">
            <div className="text-slate-900 text-3xl font-bold font-['Sen'] leading-10">
              {children}
            </div>
          </div>
        )}
      </>
    )
  },
)

DetailText.displayName = 'DetailText'
