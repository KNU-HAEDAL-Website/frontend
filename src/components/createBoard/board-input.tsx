'use client'

import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { BoardSchema } from '@/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { BoardMember } from './board-member'

export const BoardInput = () => {
  const form = useForm<z.infer<typeof BoardSchema>>({
    resolver: zodResolver(BoardSchema),
    defaultValues: {
      title: '',
      intro: '',
      image: new File([], ''),
    },
  })

  const onSubmit = (values: z.infer<typeof BoardSchema>) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col px-8 gap-4 md:px-20"
      >
        <Separator className="my-2 h-[1.5px] bg-secondary w-full" />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row md:items-center">
              <Label className="text-md w-40">게시판 제목</Label>
              <FormControl>
                <Input placeholder="게시판 제목을 입력해주세요." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="intro"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row md:items-center">
              <Label className="text-md w-40">게시판 소개</Label>
              <FormControl>
                <Textarea
                  placeholder="게시판 소개글을 작성해주세요."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator className="my-2 h-[1.5px] bg-secondary w-full" />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row md:items-center">
              <Label className="text-md w-40">게시판 대표 사진</Label>
              <FormControl className="h-8">
                <Input
                  accept=".png, .jpeg"
                  type="file"
                  multiple={false}
                  onChange={(e) =>
                    field.onChange(e.target.files ? e.target.files[0] : null)
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator className="my-2 h-[1.5px] bg-secondary w-full" />
        <div>
          {/* form item으로 변경하기 */}
          <Label className="text-md w-40">게시판 이용자 설정하기</Label>
          <BoardMember />
        </div>
        <div className="flex justify-center gap-4">
          <Button variant="secondary">취소하기</Button>
          <Button>저장하기</Button>
        </div>
      </form>
    </Form>
  )
}
