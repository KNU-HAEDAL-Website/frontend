'use client'

import { useCallback, useState } from 'react'

export function ActivityNavBar() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const handleClick = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  const renderDots = () => {
    const dots: JSX.Element[] = []

    for (let i = 0; i < 14; i++) {
      const dotClasses = `w-2 h-2 rounded cursor-pointer ${
        i === activeIndex ? 'bg-neutral-500' : 'bg-zinc-400'
      }`

      dots.push(
        <div key={i} className={dotClasses} onClick={() => handleClick(i)} />,
      )
    }

    return dots
  }

  return (
    <section className="py-2 justify-center items-center gap-2 inline-flex">
      {renderDots()}
    </section>
  )
}
