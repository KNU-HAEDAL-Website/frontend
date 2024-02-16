import Link from 'next/link'
import Image from 'next/image'

export const Logo = () => {
  return (
    <Link href="/">
      <Image width={120} height={120} src="/logo.svg" alt="logo" />
    </Link>
  )
}
