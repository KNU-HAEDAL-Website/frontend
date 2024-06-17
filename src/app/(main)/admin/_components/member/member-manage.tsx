import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs'

import { ItemLayout } from '../ui/item/item-layout'
import { BanTable } from './ban-table'
import { GradeTable } from './grade-table'
import { UpgradeTable } from './upgrade-table'

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
          <GradeTable />
        </TabsContent>
        <TabsContent value="upgrade">
          <UpgradeTable />
        </TabsContent>
        <TabsContent value="ban">
          <BanTable />
        </TabsContent>
      </Tabs>
    </ItemLayout>
  )
}
