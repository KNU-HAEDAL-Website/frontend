import { ItemSperator } from './_components/item-sperator'
import { MemberManage } from './_components/member-manage'
import { SemesterManage } from './_components/semester-manage'
import { SliderManage } from './_components/slider-manage'

const AdminPage = () => {
  return (
    <div className="mx-10 py-12 md:mx-20">
      <MemberManage />
      <ItemSperator />
      <SemesterManage />
      <ItemSperator />
      <SliderManage />
    </div>
  )
}

export default AdminPage
