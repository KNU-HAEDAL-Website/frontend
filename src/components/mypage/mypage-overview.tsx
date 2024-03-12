import Image from 'next/image'

export function MypageOverview() {
  return (
    <div className="self-stretch h-[392px] flex-col justify-start items-start gap-3 flex">
      <div className="self-stretch py-[30px] border-b border-stone-300 justify-start items-center md:gap-[60px] gap-7 inline-flex">
        <div className="justify-start items-center md:gap-2.5 gap-1 flex">
          <div className="text-slate-900 md:text-[32px] text-xl font-semibold font-['Inter']">
            한 줄 소개
          </div>
        </div>
        <div className="grow shrink basis-0 h-[29px] justify-start items-center flex">
          <div className="text-slate-900 md:text-2xl text-lg font-normal font-['Inter']">
            아자아자 화이팅!
          </div>
        </div>
        <button className="border-b-2 border-red-500 justify-start items-center gap-2.5 flex">
          <div className="text-red-500 md:text-2xl text-lg font-semibold font-['Inter']">
            수정
          </div>
        </button>
      </div>
      <div className="self-stretch py-[30px] border-b border-stone-300 justify-center items-center md:gap-[70px] gap-8 inline-flex">
        <div className="justify-start items-center gap-2.5 flex">
          <div className="text-slate-900 md:text-[32px] text-xl font-semibold font-['Inter']">
            소셜 정보
          </div>
        </div>
        <div className="grow shrink basis-0 h-[29.40px] justify-start items-center gap-2.5 flex">
          <Image
            className="w-5 h-5 flex-col justify-start items-center gap-2.5 inline-flex"
            src="/github-icon.svg"
            alt="github-icon"
            width={0}
            height={0}
          />
          <div className="justify-start items-center flex">
            <div className="text-slate-900 md:text-2xl text-lg font-normal font-['Inter']">
              ppocchi
            </div>
          </div>
        </div>
        <button className="border-b-2 border-red-500 justify-start items-center gap-2.5 flex">
          <div className="text-red-500 md:text-2xl text-lg font-semibold font-['Inter']">
            수정
          </div>
        </button>
      </div>
      <div className="self-stretch h-[170px] py-[30px] flex-col justify-center items-start gap-[30px] flex">
        <div className="justify-start items-center md:gap-[60px] gap-7 inline-flex">
          <div className="justify-start items-center gap-2.5 flex">
            <div className="text-slate-900 md:text-[32px] text-xl font-semibold font-['Inter']">
              회원 탈퇴
            </div>
          </div>
          <button className="md:py-4 md:px-8 py-3 px-3 bg-red-500 rounded-[5px] justify-center items-center flex">
            <div className="text-white md:text-2xl text-md font-bold font-['Sen'] leading-normal">
              탈퇴하기
            </div>
          </button>
        </div>
        <div className="text-stone-300 md:text-xl text-md font-normal font-['Inter']">
          탈퇴 시 작성한 게시글 및 댓글이 모두 삭제되며 복구되지 않습니다,
        </div>
      </div>
    </div>
  )
}
