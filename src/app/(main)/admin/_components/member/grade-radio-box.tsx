import { cn } from '@/lib/utils'
import { roleDB } from '@/lib/data'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

interface GradeRadioBoxProps {
  onChange: (value: string) => void
  user: UserActive
}

export const GradeRadioBox = ({ onChange, user }: GradeRadioBoxProps) => {
  return (
    <RadioGroup onValueChange={onChange} className="flex flex-col gap-4">
      {roleDB.map((role) => {
        const disabledRole = role.name === user.role
        
        return (
          <div key={role.name} className="flex items-center space-x-2">
            <RadioGroupItem value={role.name} disabled={disabledRole} />
            <Label className={cn(disabledRole && 'text-primary/50')}>
              {role.name}
            </Label>
          </div>
        )
      })}
    </RadioGroup>
  )
}
