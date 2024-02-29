import { Card, CardHeader } from '@/components/ui/card'
import { DetailCard } from '@/components/main/detail-card'

export default function DetailPage() {
  return (
    <div className="mx-12 flex h-full flex-col items-center justify-center pb-20 md:mx-24">
      <CardHeader className="text-4xl font-semibold text-primary md:text-6xl">
        HAEDAL
      </CardHeader>
      <Card className="flex h-2/3 w-full flex-col bg-secondary md:mx-24 md:h-1/2 md:flex-row">
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
