'use client'

import { useCategoryStore } from '@/store/category'
import { ActiveButton } from '@/components/active-button'

export const CategoryItem = ({ item }: { item: string }) => {
  const { category, setCategory } = useCategoryStore()
  const isActive = item === category

  return (
    <ActiveButton onClick={() => setCategory(item)} isActive={isActive}>
      {item}
    </ActiveButton>
  )
}
