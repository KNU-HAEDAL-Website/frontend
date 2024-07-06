import { useAdminUserStore } from '@/store/admin-user'
import { Form } from '@/components/ui/form'

import { useGradeForm } from '../../../_hooks/useGradeForm'
import { GradeDialogFooter } from './dialog-footer'
import { DialogFormItem } from './dialog-form-item'

export const GradeDialogForm = () => {
  const { selectedUser } = useAdminUserStore()
  const { form, onSubmit } = useGradeForm(selectedUser)

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-2"
      >
        <DialogFormItem form={form} />
        <GradeDialogFooter />
      </form>
    </Form>
  )
}
