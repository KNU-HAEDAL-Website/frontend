import { Button } from '@/components/ui/button'
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { useUserBan } from '../../_hooks/ban-user'

interface BanDialogFormProps {
  member: UserActive
  onSuccess: () => void
}

export const BanDialogForm = ({ member, onSuccess }: BanDialogFormProps) => {
  const { onClickExpelUser } = useUserBan()

  const onClick = async () => {
    await onClickExpelUser(member).then((result) => {
      if (result.success) {
        onSuccess()
      }
    })
  }

  return (
    <div>
      <DialogHeader>
        <DialogTitle>
          정말 {member.userName}님을 해달 회원에서 내보내시겠어요?
        </DialogTitle>
        <DialogDescription>
          내보내기 버튼 선택 시, 해당 회원의 계정은 삭제되며 복구되지 않습니다.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <div className="flex gap-2">
            <Button variant="secondary">취소하기</Button>
            <Button onClick={onClick}>내보내기</Button>
          </div>
        </DialogClose>
      </DialogFooter>
    </div>
  )
}
