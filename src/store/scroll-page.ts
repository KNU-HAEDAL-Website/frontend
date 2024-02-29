import { ScrollPageDB } from '@/lib/data'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface pageProps {
  selectedPage: string
  selectedPageIndex: number
  setSelectedPage: (pageIndex: number) => void
}

export const usePageStore = create<pageProps>()(
  devtools((set) => ({
    selectedPage: ScrollPageDB[0],
    selectedPageIndex: 0,
    setSelectedPage: (pageIndex: number) => {
      set(() => ({
        selectedPage: ScrollPageDB[pageIndex],
        selectedPageIndex: pageIndex,
      }))
    },
  })),
)
