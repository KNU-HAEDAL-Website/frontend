import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { ActivityCard } from './activity-card'

export function ActivityViewer() {
  const activityTitles = ['트랙', '해커톤', '부트캠프', '아이디어톤']
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-[1000px] max-w-[1280px]"
    >
      <CarouselContent>
        {activityTitles.map((title, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                {/* <CardContent className="flex aspect-square items-center justify-center p-6"> */}
                {/* <span className="text-3xl font-semibold">{title}</span> */}
                {/* </CardContent> */}
                <ActivityCard key={index} title={title} />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
