import { MemberManage } from './member/member-manage'
import { SemesterManage } from './semester/semester-manage'
import { SliderManage } from './slider/slider-manage'
import { ItemSeperator } from './ui/item-seperator'

export const AdminPageContent = () => {
  return (
    <div className="mx-10 py-12 md:mx-20">
      <MemberManage />
      <ItemSeperator />
      <SemesterManage />
      <ItemSeperator />
      <SliderManage />
    </div>
  )
}
