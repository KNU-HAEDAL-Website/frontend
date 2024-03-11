import { FooterImage } from '@/components/footer-image'
import { FooterSocial } from '@/components/footer-social'
import { FooterText } from '@/components/footer-text'

// import { Logo } from '@/components/logo'

export const Footer = () => {
  return (
    <div className="w-full md:h-[294px] h-auto md:px-[84px] px-14 md:py-[72px] py-12 bg-primary flex-col justify-center items-center gap-2.5 inline-flex">
      <div className="self-stretch grow shrink basis-0 flex-col md:justify-between gap-5 items-start flex">
        <FooterImage />
        <div className="self-stretch justify-between items-end inline-flex">
          <FooterText />
          <FooterSocial />
        </div>
      </div>
    </div>
  )
}
