'use client'

import * as z from 'zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { RegisterSchema } from '@/schema'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

export const RegisterForm = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      studentId: '',
      checked: false,
    },
  })

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이름을 입력하세요</FormLabel>
              <FormControl>
                <Input placeholder="호반우" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="studentId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>학번을 입력하세요</FormLabel>
              <FormControl>
                <Input placeholder="2024123456" type="number" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="checked"
          render={({ field }) => (
            <FormItem>
              <FormControl className="pt-4 flex items-center gap-2">
                <div>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <FormLabel>관리자의 승인 후 회원가입이 완료됩니다.</FormLabel>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          회원가입
        </Button>
        <Button size="sm" variant="link" className="w-full font-normal">
          <Link href="/auth/login">로그인하기</Link>
        </Button>
      </form>
    </Form>
  )
}
