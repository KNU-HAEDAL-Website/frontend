import { create } from 'zustand'

interface boardProps {
  selectedBoard: number
  setSelectedBoard: (value: number) => void
}

export const useBoardStore = create<boardProps>()((set) => ({
  selectedBoard: 0,
  setSelectedBoard: (value) => set(() => ({ selectedBoard: value })),
}))
