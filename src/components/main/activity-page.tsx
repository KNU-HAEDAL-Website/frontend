import { ActivityNavBar } from '@/components/main/activity-nav-bar'
import { ActivityViewer } from '@/components/main/activity-viewer'

export default function ActivityPage() {
  return (
    <div className="w-full h-[751px] py-[150px] bg-white flex-col justify-center items-center gap-2.5 inline-flex">
      <div className="self-stretch h-[403px] flex-col justify-center items-center gap-5 flex">
        <div className="justify-center items-start inline-flex">
          <div className="text-slate-900 text-4xl font-bold font-['Sen'] leading-[48px]">
            HAEDAL 활동
          </div>
        </div>
        <ActivityViewer />
      </div>
      <ActivityNavBar />
    </div>
  )
}
