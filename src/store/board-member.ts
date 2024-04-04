import { boardDB, userDB } from '@/lib/data'
import { create } from 'zustand'

interface boardMemberProps {
  loadBoardCreatorInfo: (boardId: number) => Promise<void>
  selectedMembers: UserWithGrade[]
  selectAbles: UserWithGrade[]
  setSelectAbles: () => void
  addSelectedMemeber: (cur: UserWithGrade) => void
  removeSelectedMember: () => void
  unSelectedMember: (cur: UserWithGrade) => void
}

export const useBoardMemberStore = create<boardMemberProps>()((set, get) => ({
  loadBoardCreatorInfo: async (boardId: number) => {
    /** api 설계 후 수정 */
    // const response = await fetch(`/api/boards/${boardId}`)
    // const createUser = await response.json().user
    const createUserName = boardDB[boardId].user
    const createUser = userDB.find(
      (user) => user.name === createUserName
    )
    if (!createUser) {
      throw new Error(`${createUserName}을 찾을 수 없습니다.`)
    }

    const initialBoardMembers = [createUser]

    set({ selectedMembers: initialBoardMembers })
  },
  selectedMembers: [],
  selectAbles: [],
  setSelectAbles: () => {
    set((value) => {
      const selectedMemberIds = value.selectedMembers.map(
        (member) => member.studentId,
      )
      const selectAbleMembers: UserWithGrade[] = userDB
        .filter((member) => !selectedMemberIds.includes(member.studentId))

      return { selectAbles: selectAbleMembers }
    })
  },
  addSelectedMemeber: (cur) => {
    set((value) => {
      const addNewMembers = [...value.selectedMembers, cur]

      return { selectedMembers: addNewMembers }
    })
    get().setSelectAbles()
  },
  removeSelectedMember: () => {
    set((value) => {
      const removeMembers = value.selectedMembers.slice(
        0,
        value.selectedMembers.length - 1,
      )

      return { selectedMembers: removeMembers }
    })
    get().setSelectAbles()
  },
  unSelectedMember: (cur) => {
    set((value) => {
      const unselectMembers = value.selectedMembers.filter(
        (prev) => prev.studentId !== cur.studentId,
      )

      return { selectedMembers: unselectMembers }
    })
    get().setSelectAbles()
  },
}))
