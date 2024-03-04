export const FooterText = () => {
  return (
    <div className="py-1.5 bg-slate-900 flex-col justify-center items-start gap-2.5 inline-flex">
      <div className="w-[490px] justify-start items-start gap-5 inline-flex">
        <div className="justify-center items-center gap-2.5 flex text-white text-base font-semibold font-['Inter']">
          Location
        </div>
        <div className="w-[403px] h-[19px] relative">
          <div className="left-0 top-0 absolute text-white text-base font-normal font-['Inter']">
            대구광역시 북구 대학로 80 경북대학교 IT 대학 1호관 108A
          </div>
        </div>
      </div>
      <div className="w-[490px] justify-start items-start gap-5 inline-flex">
        <div className="justify-center items-center gap-2.5 flex">
          <div className="text-white text-base font-semibold font-['Inter']">
            Made by
          </div>
        </div>
        <div className="w-[403px] h-[19px] relative">
          <div className="left-0 top-0 absolute text-white text-base font-normal font-['Inter']">
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
        <div className="w-[398px] h-[19px] relative">
          <div className="left-0 top-0 absolute text-white text-base font-normal font-['Inter']">
            tfer2442@gmail.com
          </div>
        </div>
      </div>
    </div>
  )
}
