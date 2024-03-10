import Image from 'next/image'

export function MypageProfile() {
  return (
    <div className="px-2.5 flex-col justify-start items-center gap-4 inline-flex">
      <Image
        className="md:w-[200px] sm:w-[135px] w-[100px] h-[200px] rounded-[150px]"
        src="/imageDB/profile.svg"
        alt="profile"
        width={0}
        height={0}
      />

      <button className="sm:w-50 w-40 md:px-15 px-6 py-4 bg-amber-300 justify-center items-center gap-3 inline-flex">
        <div className="text-slate-900 md:text-xl sm:text-md text-sm font-bold font-['Sen'] leading-normal">
          이미지 업로드
        </div>
      </button>
      <button className="w-50 md:px-12 px-6 py-4 justify-center items-center gap-3 inline-flex">
        <div className="text-slate-900 md:text-xl text-md font-bold font-['Sen'] leading-normal">
          이미지 제거
        </div>
      </button>
    </div>
  )
}
