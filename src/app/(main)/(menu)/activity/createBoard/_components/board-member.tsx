import { KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react'
import { Command as CommandPrimitive } from 'cmdk'
import { X } from 'lucide-react'

import { useBoardMemberStore } from '@/store/board-member'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Command, 
  CommandGroup, 
  CommandItem 
} from '@/components/ui/command'

interface boardMemberProps {
  onChange: (value: BoardMember[]) => void
}

export const BoardMember = ({ onChange }: boardMemberProps) => {
  const {
    loadBoardCreatorInfo,
    selectedMembers,
    selectAbles,
    setSelectAbles,
    addSelectedMemeber,
    removeSelectedMember,
    unSelectedMember,
  } = useBoardMemberStore()
  const inputRef = useRef<HTMLInputElement>(null)
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    //임의로 board 정보 불러옴
    loadBoardCreatorInfo(2)
    setSelectAbles()
  }, [loadBoardCreatorInfo, setSelectAbles])

  useEffect(() => {
    onChange(selectedMembers)
  }, [selectedMembers, onChange])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current
      if (input) {
        if (e.key === 'Delete' || e.key === 'Backspace') {
          if (input.value === '') {
            removeSelectedMember()
          }
        }
        if (e.key === 'Escape') {
          input.blur()
        }
      }
    },
    [removeSelectedMember],
  )

  return (
    <Command onKeyDown={handleKeyDown}>
      <div className="group border border-input px-3 py-2 text-sm ring-offset-background rounded-md focus-within:border-primary">
        <div className="flex gap-1 flex-wrap">
          {selectedMembers.map((member) => {
            return (
              <Badge
                className="w-fit"
                variant="secondary"
                key={member.studentId}
              >
                {member.name}
                <Button
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      unSelectedMember(member)
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                  onClick={() => unSelectedMember(member)}
                  variant="ring"
                  size="iconWithLabel"
                >
                  <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                </Button>
              </Badge>
            )
          })}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder="게시판 이용자를 입력해주세요."
            className="ml-2 bg-transparent outline-none placeholder:text-muted-foreground flex-1"
          />
        </div>
      </div>
      <div className="mt-1">
        {open && selectAbles.length > 0 ? (
          <div className="w-full z-10 top-0 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
            <CommandGroup className="h-full overflow-auto">
              {selectAbles.map((member) => {
                return (
                  <CommandItem
                    key={member.studentId}
                    onMouseDown={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                    }}
                    onSelect={() => {
                      setInputValue('')
                      addSelectedMemeber(member)
                    }}
                  >
                    {member.studentId} {member.name}
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </div>
        ) : null}
      </div>
    </Command>
  )
}
