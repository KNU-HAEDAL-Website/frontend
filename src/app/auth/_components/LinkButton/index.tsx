import Link from 'next/link'

import { Button } from '@/components/ui/button'

type LinkButtonProps = {
  label: string
  backLink: string
}

export const LinkButton = ({ label, backLink }: LinkButtonProps) => {
  return (
    <div className="flex w-full justify-center">
      <Button variant="link" className="font-normal">
        <Link href={backLink}>{label}</Link>
      </Button>
    </div>
  )
}
