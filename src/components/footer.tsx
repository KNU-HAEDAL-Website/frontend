import { FooterImage } from '@/components/footer-image'
import { FooterSocial } from '@/components/footer-social'
import { FooterText } from '@/components/footer-text'

// import { Logo } from '@/components/logo'

export const Footer = () => {
  return (
    <div className="w-full h-[294px] px-[84px] py-[72px] bg-primary flex-col justify-center items-center gap-2.5 inline-flex">
      <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start flex">
        <FooterImage />
        <div className="self-stretch justify-between items-end inline-flex">
          <FooterText />
          <FooterSocial />
        </div>
      </div>
    </div>
  )
}
