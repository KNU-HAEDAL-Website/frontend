import { useActivityStore } from '~activity/_store/activity'

import { ActivityBoards } from './ActivityBoards'

export const BoardSection = () => {
  const currentActivity = useActivityStore((state) => state.currentActivity)

  if (!currentActivity) return <div>loading...</div>

  return <ActivityBoards activityId={currentActivity.activityId} />
}
