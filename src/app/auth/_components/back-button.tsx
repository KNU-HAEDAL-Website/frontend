import Link from 'next/link'

import { Button } from '@/components/ui/button'

interface BackButtonProps {
  label: string
  backLink: string
}

export const BackButton = ({ label, backLink }: BackButtonProps) => {
  return (
    <Button size="sm" variant="link" className="w-full font-normal">
      <Link href={backLink}>{label}</Link>
    </Button>
  )
}
