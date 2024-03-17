import { Button } from '@/components/ui/button'

export default function SubmitPage() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-[303px] h-[124px] flex-col justify-start items-center gap-5 inline-flex">
        <div className="justify-center items-center inline-flex">
          <span className="text-center text-slate-900 text-4xl font-bold font-['Sen'] leading-[48px]">
            HAEDAL과 함께하기
          </span>
        </div>

        <Button
          className="justify-center items-center gap-3 inline-flex text-slate-900 text-2xl font-bold font-['Sen'] leading-normal"
          variant="apply"
          size="apply"
        >
          지원하기
        </Button>
      </div>
    </div>
  )
}
