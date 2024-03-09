import Image from 'next/image'

export const FooterImage = () => {
  return (
    <div className="justify-start inline-flex">
      <Image
        src="/logo.svg"
        alt="logo"
        className="w-full h-[29px]"
        width={0}
        height={0}
      />
    </div>
  )
}
