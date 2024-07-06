import { useUserUpgrade } from '../../../_hooks/upgrade-user'
import { useInactivieUsers } from './useInactivieUsers'

export const useUpgradeForm = (user: UserInactive) => {
  const { onClickApproveUser, onClickReject } = useUserUpgrade()
  const { loadInactiveUsers } = useInactivieUsers()

  const handleApproveUser = async () => {
    const result = await onClickApproveUser(user)

    if (result.success) {
      loadInactiveUsers()
    }
  }

  const handleExpelUser = async () => {
    const result = await onClickReject(user)

    if (result.success) {
      loadInactiveUsers()
    }
  }

  return { handleApproveUser, handleExpelUser }
}
