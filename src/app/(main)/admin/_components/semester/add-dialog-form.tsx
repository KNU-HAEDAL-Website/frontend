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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'

import { SelectTerm } from './select-term'

export const AddDialogForm = () => {
  const form = useForm<z.infer<typeof AddSemesterSchema>>({
    resolver: zodResolver(AddSemesterSchema),
  })

  const onSubmit = (values: z.infer<typeof AddSemesterSchema>) => {
    console.log(values)
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
                  <InputOTP maxLength={4} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                    </InputOTPGroup>
                  </InputOTP>
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
                  <SelectTerm onChange={field.onChange}/>
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
