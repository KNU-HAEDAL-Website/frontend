import Link from 'next/link'

import { Button } from '@/components/ui/button'

type LinkButtonProps = {
  label: string
  backLink: string
}

export const LinkButton = ({ label, backLink }: LinkButtonProps) => {
  return (
    <div className="flex w-fit justify-center">
      <Button variant="link" className="font-normal">
        <Link href={backLink} className="text-white">
          {label}
        </Link>
      </Button>
    </div>
  )
}
