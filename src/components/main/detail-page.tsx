import { DetailCard } from '@/components/main/detail-card'
import { Card, CardHeader } from '@/components/ui/card'

import { DetailText } from './detail-text'

export default function DetailPage() {
  return (
    <div className="mx-12 flex h-full flex-col items-center justify-center pb-20 md:mx-24">
      <CardHeader className="text-5xl font-semibold text-primary md:text-6xl">
        HAEDAL
      </CardHeader>
      <Card className="flex h-auto w-full flex-col bg-secondary md:mx-24 md:h-1/2 md:flex-row">
        <DetailCard className="flex-1" headerLabel="ABOUT US">
          <div className="md:w-[222px] w-auto md:h-12 h-5 md:gap-[55px] gap-10 inline-flex">
            <DetailText line="2">2018~</DetailText>
            <DetailText line="2">123+</DetailText>
          </div>
        </DetailCard>
        <DetailCard className="md:w-[481px] w-auto" headerLabel="OUR VISION">
          <DetailText line="1">Road to Coding Master</DetailText>
        </DetailCard>
      </Card>
    </div>
  )
}
