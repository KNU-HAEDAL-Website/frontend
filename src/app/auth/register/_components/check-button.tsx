import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { RegisterDoubleCheckSchema } from '@/schema'
import { checkStudentNumber } from '@/services/checkStudentNumber'
import { checkUserId } from '@/services/checkUserId'

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
  const [error, setError] = useState<string | undefined>()

  const onClick = () => {
    console.log(checkType, typeof value)
    setCheckMessage({ success: false, message: '' })
    if (checkType == 'userId') {
      const result = RegisterDoubleCheckSchema.shape.userId.safeParse(value)
      if (result.success) {
        checkUserId(value).then((data) => {
          setCheckMessage({ success: data.success, message: data.message })
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
