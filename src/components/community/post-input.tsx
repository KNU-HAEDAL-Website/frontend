'use client'

import { useForm } from 'react-hook-form'

import { PostEditor } from '@/components/community/post-editor'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { PostSchema } from '@/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { z } from 'zod'

export const PostInput = () => {
  const form = useForm<z.infer<typeof PostSchema>>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      title: '',
      activityDate: {
        from: undefined,
        to: undefined,
      },
      content: '',
      image: new File([], ''),
    },
  })

  const onClick = () => {
    console.log(form.formState.errors)
    form.register('content')
    const storedContent = localStorage.getItem('editorContent')
    if (storedContent) {
      form.setValue('content', storedContent)
    }
    form.handleSubmit(onSubmit)()
  }

  const onSubmit = (values: z.infer<typeof PostSchema>) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col px-8 gap-4 md:px-20"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex flex-col  md:items-center md:flex-row">
              <Label className="text-md w-24 ">게시글 제목</Label>
              <FormControl>
                <Input placeholder="게시글 제목을 입력해주세요." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="activityDate"
          render={({ field }) => (
            <FormItem className="flex flex-col md:items-center md:flex-row">
              <Label className="text-md w-24 ">활동 날짜</Label>
              <div className="w-full">
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
                          <span className="text-muted-foreground font-light">
                            활동 날짜를 선택해주세요.
                          </span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar
                      mode="range"
                      selected={{ from: field.value.from!, to: field.value.to }}
                      onSelect={field.onChange}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator className="my-2 h-[1.5px] bg-secondary w-full" />
        <div className="flex flex-col">
          <Label className="text-md w-fit">게시글 내용 작성하기</Label>
          <div className=" h-[70vh] overflow-y-scroll w-full rounded-md border">
            <PostEditor />
          </div>
        </div>
        <Separator className="my-2 h-[1.5px] bg-secondary w-full" />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row md:items-center">
              <Label className="text-md w-40">게시판 대표 사진</Label>
              <FormControl>
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
        <Button onClick={onClick}>저장하기</Button>
      </form>
    </Form>
  )
}
