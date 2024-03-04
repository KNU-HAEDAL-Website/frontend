import Image from 'next/image'

// import Link from 'next/link'

export const FooterSocial = () => {
  return (
    <div className="justify-start items-start gap-5 flex">
      <div className="relative">
        {/* <Link href=" 주소"> */}
        <Image
          className="w-[30px] h-[30px]"
          src="/imageDB/Email.svg"
          alt="Email"
          width={0}
          height={0}
        />
        {/* </Link> */}
      </div>
      <div className="relative">
        {/* <Link href="깃허브 주소"> */}
        <Image
          className="w-[29.06px] h-[30px]"
          src="/imageDB/github.svg"
          alt="github"
          width={0}
          height={0}
        />
        {/* </Link> */}
      </div>
      <div className="relative">
        {/* <Link href="인스타 주소"> */}
        <Image
          className="w-[30px] h-[30px]"
          src="/imageDB/Instagram.svg"
          alt="Instagram"
          width={0}
          height={0}
        />
        {/* </Link> */}

        {/* <div className="w-[29.98px] h-[29.99px] left-0 top-0 absolute"></div> */}
      </div>
    </div>
  )
}
