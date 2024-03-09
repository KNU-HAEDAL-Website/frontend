import { FooterImage } from '@/components/footer-image'
import { FooterSocial } from '@/components/footer-social'
import { FooterText } from '@/components/footer-text'

// import { Logo } from '@/components/logo'

export const FooterPage = () => {
  return (
    <div className="w-full h-[294px] px-[84px] py-[72px] absolute bg-slate-900 flex-col justify-center items-center gap-2.5 inline-flex">
      <div className="self-stretch grow shrink basis-0 bg-slate-900 flex-col justify-between items-start flex">
        <FooterImage />
        <div className="self-stretch bg-slate-900 justify-between items-end inline-flex">
          <FooterText />
          <FooterSocial />
        </div>
      </div>
    </div>
  )
}
