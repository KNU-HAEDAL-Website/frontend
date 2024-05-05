import { useState } from 'react'

import { RegisterDoubleCheckSchema } from '@/schema'
import { checkStudentNumber } from '@/services/checkStudentNumber'
import { checkUserId } from '@/services/checkUserId'
import { useRegisterCheckStore } from '@/store/register-check'
import { Button } from '@/components/ui/button'

interface CheckButtonProps {
  checkType: 'userId' | 'studentNumber'
  value: string
  setCheckMessage: ({ success, message }: CheckResponse) => void
}

export const CheckButton = ({
  checkType,
  value,
  setCheckMessage,
}: CheckButtonProps) => {
  const { setSuccessUserId, setSuccessStudentNumber } = useRegisterCheckStore()
  const [error, setError] = useState<string | undefined>()

  const onClick = () => {
    setCheckMessage({ success: false, message: '' })
    if (checkType == 'userId') {
      const result = RegisterDoubleCheckSchema.shape.userId.safeParse(value)
      if (result.success) {
        checkUserId(value).then((data) => {
          setCheckMessage({ success: data.success, message: data.message })
          if (data.success) {
            setSuccessUserId(true)
          }
        })
        return
      }
      setError(JSON.parse(result.error.message)[0].message)
    }

    if (checkType == 'studentNumber') {
      const result =
        RegisterDoubleCheckSchema.shape.studentNumber.safeParse(value)
      if (result.success) {
        checkStudentNumber(Number(value)).then((data) => {
          setCheckMessage({ success: data.success, message: data.message })
          if (data.success) {
            setSuccessStudentNumber(true)
          }
        })
        return
      }
      setError(JSON.parse(result.error.message)[0].message)
    }

    //error
    if (error) {
      setCheckMessage({ success: false, message: error })
      return
    }
  }

  return (
    <Button type="button" size="basic" variant="outline" onClick={onClick}>
      중복 확인
    </Button>
  )
}
