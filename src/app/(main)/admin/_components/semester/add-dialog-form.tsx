'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { AddSemesterSchema } from '@/schema'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { useSemester } from '../../_hooks/use-semester'
import { SelectTerm } from './select-term'

interface AddDialogFormProps {
  onSuccess: () => void
}

export const AddDialogForm = ({ onSuccess }: AddDialogFormProps) => {
  const form = useForm<z.infer<typeof AddSemesterSchema>>({
    resolver: zodResolver(AddSemesterSchema),
    defaultValues: {
      year: '',
    },
  })
  const { onClickAddSemester } = useSemester()

  const onSubmit = async (values: z.infer<typeof AddSemesterSchema>) => {
    const semester = values.year + values.term
    await onClickAddSemester(semester).then((result) => {
      if (result.success) {
        onSuccess()
      }
    })
  }

  const onClick = () => {
    form.handleSubmit(onSubmit)()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-6"
      >
        <div className="flex gap-8">
          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>연도를 입력해주세요.</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="term"
            render={({ field }) => (
              <FormItem>
                <FormLabel>학기를 선택해주세요.</FormLabel>
                <FormControl>
                  <SelectTerm onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button onClick={onClick}>추가하기</Button>
      </form>
    </Form>
  )
}
