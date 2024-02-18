import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface categoryProps {
  category: string
  setCategory: (value: string) => void
}

export const useCategoryStore = create<categoryProps>()(
  devtools((set) => ({
    category: '부트캠프',
    setCategory: (value) => set(() => ({ category: value })),
  })),
)
