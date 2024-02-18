import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface categoryProps {
  selectedCategory: string
  setSelectedCategory: (value: string) => void
}

export const useCategoryStore = create<categoryProps>()(
  devtools((set) => ({
    selectedCategory: '부트캠프',
    setSelectedCategory: (value) => set(() => ({ selectedCategory: value })),
  })),
)
