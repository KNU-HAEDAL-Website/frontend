import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { ItemLayout } from './item-layout'
import { BanContainer } from './member/ban-container'
import { GradeContainer } from './member/grade-container'
import { UpgradeContainer } from './member/upgrade-container'

export const MemberManage = () => {
  return (
    <ItemLayout title="멤버 관리">
      <Tabs defaultValue="grade" className="w-full">
        <TabsList className="flex w-fit gap-4">
          <TabsTrigger value="grade">권한 설정</TabsTrigger>
          <TabsTrigger value="upgrade">멤버 승인</TabsTrigger>
          <TabsTrigger value="ban">내보내기</TabsTrigger>
        </TabsList>
        <TabsContent value="grade">
          <GradeContainer />
        </TabsContent>
        <TabsContent value="upgrade">
          <UpgradeContainer />
        </TabsContent>
        <TabsContent value="ban">
          <BanContainer />
        </TabsContent>
      </Tabs>
    </ItemLayout>
  )
}
