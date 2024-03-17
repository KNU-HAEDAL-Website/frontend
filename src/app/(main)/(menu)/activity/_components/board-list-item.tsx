import Image from 'next/image'

import { 
  Card,
  CardContent,
  CardTitle
} from '@/components/ui/card'
import { NameTag } from '@/components/name-tag'

export const BoardListItem = ({ id, name, intro, image, user }: Board) => {
  return (
    <Card className="mx-12 mb-6 flex cursor-pointer items-center rounded-none border-none md:mx-24">
      <div className="flex h-36 w-24 flex-col items-center justify-center overflow-hidden sm:w-48 md:w-72 md:flex-row">
        {image && (
          <Image
            width={300}
            height={300}
            src={image}
            alt="boardImage"
            objectFit="cover"
          />
        )}
      </div>
      <div>
        <div className="flex items-center gap-2 px-6 py-2">
          <CardTitle className="text-lg">{name}</CardTitle>
          {user && <NameTag name={user} />}
        </div>
        <CardContent className="text-sm text-primary/70">{intro}</CardContent>
        <div className="hidden">{id}</div>
      </div>
    </Card>
  )
}
