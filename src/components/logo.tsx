import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        width={0}
        height={0}
        src="/logo.svg"
        alt="logo"
        sizes="100vw"
        className="h-full w-auto"
      />
    </Link>
  )
}
