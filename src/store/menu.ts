import { create } from 'zustand'

interface menuProps {
  open: boolean
  setOpen: (value: boolean) => void
}

export const useMenuStore = create<menuProps>()((set) => ({
  open: false,
  setOpen: (value) => set(() => ({ open: value })),
}))
