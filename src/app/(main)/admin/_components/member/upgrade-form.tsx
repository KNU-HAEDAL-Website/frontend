'use client'

import { useUserUpgrade } from '../../_hooks/upgrade-user'
import { UpgradeFormButton } from './upgrade-form-button'

interface UpgradeButtonProps {
  member: UserInactive
  onSuccess: () => void
}

export const UpgradeForm = ({ member, onSuccess }: UpgradeButtonProps) => {
  const { onClickApproveUser, onClickReject } = useUserUpgrade()

  const handleApprove = async () => {
    await onClickApproveUser(member).then((result) => {
      if (result.success) {
        onSuccess()
      }
    })
  }

  const handleExpel = async () => {
    await onClickReject(member).then((result) => {
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
