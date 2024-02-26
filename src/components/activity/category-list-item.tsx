'use client'

import { useCategoryStore } from '@/store/category'
import { ActiveButton } from '@/components/active-button'

export const CategoryListItem = ({
  categoryItem,
}: {
  categoryItem: string
}) => {
  const { selectedCategory, setSelectedCategory } = useCategoryStore()
  const isActive = categoryItem === selectedCategory

  return (
    <ActiveButton
      onClick={() => setSelectedCategory(categoryItem)}
      isActive={isActive}
      size="md"
      className="cursor-pointer"
    >
      {categoryItem}
    </ActiveButton>
  )
}
