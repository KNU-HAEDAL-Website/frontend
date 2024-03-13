'use client'

import { useForm } from 'react-hook-form'

import { PostEditor } from '@/components/community/post-editor'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { PostSchema } from '@/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { z } from 'zod'

export const PostInput = () => {
  const form = useForm<z.infer<typeof PostSchema>>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      title: '',
      activityDate: {},
      content: '',
      image: new File([], ''),
    },
  })

  const onSubmit = (values: z.infer<typeof PostSchema>) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col px-8 gap-4 md:px-20"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="게시글 제목을 입력해주세요." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="activityDate"
          render={({ field }) => (
            <FormItem>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button variant="outline">
                      {field.value?.from ? (
                        field.value.to ? (
                          <>
                            {format(field.value.from, 'yyyy.LL.dd')} -{' '}
                            {format(field.value.to, 'yyyy.LL.dd')}
                          </>
                        ) : (
                          format(field.value.from, 'yyyy.LL.dd')
                        )
                      ) : (
                        <span>활동 날짜를 선택해주세요.</span>
                      )}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar
                    mode="range"
                    defaultMonth={field?.value.from}
                    selected={field.value}
                    onSelect={field.onChange}
                  />
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
        <PostEditor />
      </form>
    </Form>
  )
}
