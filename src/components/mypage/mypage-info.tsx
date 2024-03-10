export function MypageInfo() {
  return (
    <div className="py-10 flex-col justify-center items-start md:gap-[30px] gap-4 inline-flex">
      <div className="justify-center items-center gap-10 inline-flex">
        <div className="justify-center items-center flex">
          <div className="text-black md:text-5xl text-4xl font-semibold font-['Inter']">
            김아진
          </div>
        </div>
        <div className="w-50 h-13 px-6 py-2 hidden md:flex rounded-[50px] border border-slate-900 justify-center items-center">
          <div className="text-center text-slate-900 md:text-[24px] md:text-md font-normal font-['Inter']">
            해구르르
          </div>
        </div>
      </div>
      <div className="justify-center items-center inline-flex">
        <div className="text-black md:text-[32px] text-2xl font-normal font-['Inter']">
          2021113989
        </div>
      </div>
      <div className="w-50 h-13 px-6 py-2 md:hidden flex rounded-[50px] border border-slate-900 justify-center items-center">
        <div className="text-center text-slate-900 md:text-[24px] md:text-md font-normal font-['Inter']">
          해구르르
        </div>
      </div>
    </div>
  )
}
