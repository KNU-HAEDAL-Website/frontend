import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface menuProps {
  open: boolean
  setOpen: (value: boolean) => void
}

export const useMenuStore = create<menuProps>()(
  devtools((set) => ({
    open: false,
    setOpen: (value) => set(() => ({ open: value })),
  })),
)
