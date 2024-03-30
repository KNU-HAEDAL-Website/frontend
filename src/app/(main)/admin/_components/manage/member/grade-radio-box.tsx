import { gradeListDB } from '@/lib/data'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

interface GradeRadioBoxProps {
  user: ManageUserGrade
}

export const GradeRadioBox = ({ user }: GradeRadioBoxProps) => {
  // api 연결 전 더미데이터 사용

  return (
    <RadioGroup className="flex gap-4">
      {gradeListDB.map((grade) => {
        const ableGrade = grade.name !== user.grade
        return (
          <div key={grade.id}>
            {ableGrade ? (
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={grade.name} key={grade.id.toString()} />
                <Label htmlFor={grade.id.toString()}>{grade.name}</Label>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value={user.grade}
                  key={grade.id.toString()}
                  disabled
                />
                <Label
                  htmlFor={grade.id.toString()}
                  className="text-primary/50"
                >
                  {user.grade}
                </Label>
              </div>
            )}
          </div>
        )
      })}
    </RadioGroup>
  )
}
