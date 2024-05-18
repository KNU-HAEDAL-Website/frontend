'use client'

import { useUserActions } from '../../_hooks/upgradeUser'
import { UpgradeFormButton } from './upgrade-form-button'

interface UpgradeButtonProps {
  member: UserInactive
  onSuccess: () => void
}

export const UpgradeForm = ({ member, onSuccess }: UpgradeButtonProps) => {
  const { onClickApproveUser, onClickExpelUser } = useUserActions()

  const handleApprove = async () => {
    await onClickApproveUser(member).then((result) => {
      if (result.success) {
        onSuccess()
      }
    })
  }

  const handleExpel = async () => {
    await onClickExpelUser(member).then((result) => {
      if (result.success) {
        onSuccess()
      }
    })
  }

  return (
    <div className="flex gap-3">
      <UpgradeFormButton type="수락" onClick={handleApprove} />
      <UpgradeFormButton type="거절" onClick={handleExpel} />
    </div>
  )
}
