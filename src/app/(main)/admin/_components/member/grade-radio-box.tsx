import { cn } from '@/lib/utils'
import { gradeListDB } from '@/lib/data'
import { useGradeMemberStore } from '@/store/grade-member'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

interface GradeRadioBoxProps {
  onChange: (value: string) => void
}

export const GradeRadioBox = ({ onChange }: GradeRadioBoxProps) => {
  // api 연결 전 더미데이터 사용
  const { selectedMember, setSelectedGrade } = useGradeMemberStore()

  return (
    <RadioGroup onValueChange={onChange} className="flex flex-col gap-4">
      {gradeListDB.map((grade) => {
        const disabledGrade = grade.name === selectedMember.grade
        return (
          <div key={grade.id}>
            <div
              onClick={() => setSelectedGrade(grade.name)}
              className="flex items-center space-x-2"
            >
              <RadioGroupItem value={grade.name} disabled={disabledGrade} />
              <Label className={cn(disabledGrade && 'text-primary/50')}>
                {grade.name}
              </Label>
            </div>
          </div>
        )
      })}
    </RadioGroup>
  )
}
