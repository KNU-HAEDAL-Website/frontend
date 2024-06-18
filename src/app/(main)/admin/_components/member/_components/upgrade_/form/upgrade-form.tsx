'use client'

import { useUpgradeForm } from '../../../_hooks/useUpgradeForm'
import { UpgradeFormButton } from './form-button'

interface UpgradeFormProps {
  member: UserInactive
}

export const UpgradeForm = ({ member }: UpgradeFormProps) => {
  const { handleApproveUser, handleExpelUser } = useUpgradeForm(member)

  return (
    <div className="flex gap-3">
      <UpgradeFormButton type="수락" onClick={handleApproveUser} />
      <UpgradeFormButton type="거절" onClick={handleExpelUser} />
    </div>
  )
}
