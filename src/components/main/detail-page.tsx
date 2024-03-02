import { DetailCard } from '@/components/main/detail-card'
import { Card, CardHeader } from '@/components/ui/card'

import { DetailText } from './detail-text'

export default function DetailPage() {
  return (
    <div className="mx-12 flex h-full flex-col items-center justify-center pb-20 md:mx-24">
      <CardHeader className="text-4xl font-semibold text-primary md:text-6xl">
        HAEDAL
      </CardHeader>
      <Card className="flex h-2/3 w-full flex-col bg-secondary md:mx-24 md:h-1/2 md:flex-row">
        <DetailCard className="flex-1" headerLabel="ABOUT US">
          <div className="w-[222px] h-12 justify-start items-start gap-[55px] inline-flex">
            <DetailText line="2">2018~</DetailText>
            <DetailText line="2">123+</DetailText>
          </div>
        </DetailCard>
        <DetailCard className="w-[481px]" headerLabel="OUR VISION">
          <DetailText line="1">Road to Coding Master</DetailText>
        </DetailCard>
      </Card>
    </div>
  )
}
