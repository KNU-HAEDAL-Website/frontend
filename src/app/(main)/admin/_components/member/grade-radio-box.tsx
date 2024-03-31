import { gradeListDB } from '@/lib/data'
import { cn } from '@/lib/utils'
import { useGradeMemberStore } from '@/store/grade-member'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export const GradeRadioBox = () => {
  // api 연결 전 더미데이터 사용
  const { selectedMember } = useGradeMemberStore()

  return (
    <RadioGroup className="flex gap-4">
      {gradeListDB.map((grade) => {
        const disabledGrade = grade.name === selectedMember.grade
        return (
          <div key={grade.id}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value={grade.name}
                key={grade.id.toString()}
                disabled={disabledGrade}
              />
              <Label
                htmlFor={grade.id.toString()}
                className={cn(disabledGrade && 'text-primary/50')}
              >
                {grade.name}
              </Label>
            </div>
          </div>
        )
      })}
    </RadioGroup>
  )
}
