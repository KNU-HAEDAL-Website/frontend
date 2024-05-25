import { MouseEvent, useState } from 'react'

import { logout } from '@/services/logout'

import { DialogMessage } from './dialog-message'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'

export const LogoutButton = () => {
  const [success, setSuccess] = useState<string | undefined>('')
  const [error, setError] = useState<string | undefined>('')

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setError('')
    setSuccess('')

    logout().then((data) => {
      setError(data?.error)
      setSuccess(data?.success)
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button onClick={onClick}>로그아웃</button>
      </DialogTrigger>
      <DialogContent>
        {success && <DialogMessage message={success} />}
        {error && <DialogMessage title="로그아웃" message={error} />}
      </DialogContent>
    </Dialog>
  )
}
