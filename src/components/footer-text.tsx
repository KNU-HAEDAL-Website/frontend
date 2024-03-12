export const FooterText = () => {
  return (
    <div className="py-1.5 bg-slate-900 flex-col justify-center items-start gap-2.5 inline-flex">
      <div className="w-auto justify-start items-start gap-5 inline-flex">
        <div className="justify-center items-center gap-2.5 flex text-white text-base font-semibold font-['Inter']">
          Location
        </div>
        <div className="w-auto md:h-auto h-auto">
          <div className="flex text-white text-base font-normal font-['Inter']">
            대구광역시 북구 대학로 80 경북대학교 IT 대학 1호관 108A
          </div>
        </div>
      </div>
      <div className="w-auto justify-start items-start gap-5 inline-flex">
        <div className="justify-center items-center gap-2.5 flex">
          <div className="text-white text-base font-semibold font-['Inter']">
            Made by
          </div>
        </div>
        <div className="w-auto h-auto relative">
          <div className="absolute text-white text-base font-normal font-['Inter']">
            dkwls0234@gmail.com
          </div>
        </div>
      </div>
      <div className="justify-start items-start gap-2.5 inline-flex">
        <div className="justify-center items-center gap-2.5 flex">
          <div className="text-white text-base font-semibold font-['Inter']">
            Contact to
          </div>
        </div>
        <div className="w-auto h-auto relative">
          <div className=" text-white text-base font-normal font-['Inter']">
            tfer2442@gmail.com
          </div>
        </div>
      </div>
    </div>
  )
}
