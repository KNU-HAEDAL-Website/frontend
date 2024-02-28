import Image from 'next/image'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { NameTag } from '@/components/name-tag'

export const BoardListItem = ({ id, name, intro, image, user }: Board) => {
  return (
    <Card className="flex items-center rounded-none border-none mb-6 mx-12 cursor-pointer md:mx-24">
      <div className="w-24 h-36 flex flex-col justify-center items-center overflow-hidden sm:w-48 md:w-72 md:flex-row">
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
        <div className="flex items-center px-6 py-2 gap-2">
          <CardTitle className="text-lg">{name}</CardTitle>
          {user && <NameTag name={user} />}
        </div>
        <CardContent className="text-sm text-primary/70">{intro}</CardContent>
        <div className="hidden">{id}</div>
      </div>
    </Card>
  )
}
