import { Button } from '@/components/ui/button'
import { LoginSchema } from '@/schema'
import { checkUserId } from '@/services/checkUserId'

interface CheckButtonProps {
  checkType: 'userId' | 'studentId'
  value: string
  setCheckMessage: ({ success, message }: CheckResponse) => void
}

export const CheckButton = ({
  checkType,
  value,
  setCheckMessage,
}: CheckButtonProps) => {
  const onClick = () => {
    const result = LoginSchema.shape.userId.safeParse(value)
    setCheckMessage({ success: false, message: '' })

    if (result.success) {
      if (checkType == 'userId') {
        checkUserId(value).then((data) => {
          setCheckMessage({ success: data.success, message: data.message })
        })
      }
      if (checkType == 'studentId') {
        //check-student-number
      }
      return
    }

    //error
    const errorMessage = JSON.parse(result.error.message)
    if (errorMessage) {
      const curErrorMessage = errorMessage[0].message
      setCheckMessage({ success: false, message: curErrorMessage })
    }
    return
  }

  return (
    <Button type="button" size="basic" variant="outline" onClick={onClick}>
      중복 확인
    </Button>
  )
}
