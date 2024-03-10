import { MypageInfo } from '@/components/mypage/mypage-info'
import { MypageOverview } from '@/components/mypage/mypage-overview'
import { MypageProfile } from '@/components/mypage/mypage-profile'

const ProfilePage = () => {
  return (
    <div className="w-full h-fit px-8 md:px-[120px] md:py-[100px] flex-col justify-start items-center md:gap-20 gap-5 inline-flex">
      <div className="self-stretch bg-white justify-start items-start gap-[30px] inline-flex">
        <MypageProfile />
        <MypageInfo />
      </div>
      <div className="self-stretch h-[392px] bg-white flex-col justify-center items-center gap-10 flex">
        <MypageOverview />
      </div>
    </div>
  )
}

export default ProfilePage
