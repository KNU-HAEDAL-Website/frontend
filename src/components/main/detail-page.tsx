import { Card, CardHeader } from '@/components/ui/card'
import { DetailCard } from '@/components/main/detail-card'

export default function DetailPage() {
  return (
    <div className="h-full flex flex-col justify-center items-center pb-20 mx-12 md:mx-24">
      <CardHeader className="font-semibold text-4xl text-primary md:text-6xl">
        HAEDAL
      </CardHeader>
      <Card className="w-full h-2/3 flex flex-col bg-secondary md:flex-row md:mx-24 md:h-1/2">
        <DetailCard className="flex-1" headerLabel="About Us">
          test
        </DetailCard>
        <DetailCard className="flex-1" headerLabel="Our Mission">
          test
        </DetailCard>
      </Card>
    </div>
  )
}
