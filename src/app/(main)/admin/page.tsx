import { ItemSeperator } from './_components/item-seperator'
import { MemberManage } from './_components/manage/member-manage'
import { SemesterManage } from './_components/manage/semester-manage'
import { SliderManage } from './_components/manage/slider-manage'

const AdminPage = () => {
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

export default AdminPage
