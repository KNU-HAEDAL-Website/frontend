import { roleDB } from '@/lib/data'
import { RadioGroup } from '@/components/ui/radio-group'

import { RadioBoxItem } from './radio-box-item'

interface GradeRadioBoxProps {
  onChange: (value: string) => void
}

export const GradeRadioBox = ({ onChange }: GradeRadioBoxProps) => {
  return (
    <RadioGroup onValueChange={onChange} className="flex flex-col gap-4">
      {roleDB.map((role) => {
        return (
          <div key={role.id} className="flex items-center space-x-2">
            <RadioBoxItem roleName={role.name} />
          </div>
        )
      })}
    </RadioGroup>
  )
}
