import { useState } from 'react'
import { useCallback } from 'react'
import { useRef } from 'react'
import { KeyboardEvent } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Command, CommandItem } from '@/components/ui/command'
import { BoardMembers } from '@/lib/data'
import { CommandGroup, Command as CommandPrimitive } from 'cmdk'
import { X } from 'lucide-react'

export const BoardMember = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<BoardMember[]>([BoardMembers[0]])
  const [inputValue, setInputValue] = useState('')

  const selectalbes = BoardMembers.filter(
    (member) => !selected.includes(member),
  )

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    const input = inputRef.current
    if (input) {
      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (input.value === '') {
          setSelected((prev) => {
            const newSelected = [...prev]
            newSelected.pop()
            return newSelected
          })
        }
      }
      if (e.key === 'Escape') {
        input.blur()
      }
    }
  }, [])

  const handleUnselect = useCallback((member: BoardMember) => {
    setSelected((prev) => prev.filter((s) => s.studentId != member.studentId))
  }, [])

  return (
    <Command onKeyDown={handleKeyDown}>
      <div className="group border border-input px-3 py-2 text-sm ring-offset-background rounded-md focus-within:ring-1 focus-within:ring-ring ">
        <div className="flex gap-1 flex-wrap">
          {selected.map((member) => {
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
                      handleUnselect(member)
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                  onClick={() => handleUnselect(member)}
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
            placeholder="게시판 이용자를 입력해주세요..."
            className="ml-2 bg-transparent outline-none placeholder:text-muted-foreground flex-1"
          />
        </div>
      </div>
      <div className="mt-1">
        {open && selectalbes.length > 0 ? (
          <div className="w-full z-10 top-0 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
            <CommandGroup className="h-full overflow-auto">
              {selectalbes.map((member) => {
                return (
                  <CommandItem
                    key={member.studentId}
                    onMouseDown={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                    }}
                    onSelect={() => {
                      setInputValue('')
                      setSelected((prev) => [...prev, member])
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
