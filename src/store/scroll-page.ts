import { MainScrollPageDB } from '@/lib/data'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface pageProps {
  totalPageNumber: number
  selectedWindowHeight: number
  selectedPage: number
  setSelectedWindowHeight: () => void
  setSelectedPage: (scrollY: number) => void
}

export const usePageStore = create<pageProps>()(
  devtools((set) => ({
    totalPageNumber: MainScrollPageDB.length,
    selectedWindowHeight: window.innerHeight,
    selectedPage: 0,
    setSelectedWindowHeight: () =>
      set(() => ({ selectedWindowHeight: window.innerHeight })),
    setSelectedPage: (scrollY: number) => {
      set((value) => {
        const pageHeight = value.selectedWindowHeight
        const totalPageNumber = value.totalPageNumber
        const page = Math.max(
          0,
          Math.min(Math.floor(scrollY / pageHeight), totalPageNumber - 1),
        )
        return { selectedPage: page }
      })
    },
  })),
)
