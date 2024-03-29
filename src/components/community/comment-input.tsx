import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { CommentSchema } from '@/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const CommentInput = () => {
  const form = useForm<z.infer<typeof CommentSchema>>({
    resolver: zodResolver(CommentSchema),
    // user 임의로 설정
    defaultValues: {
      content: '',
      createAt: undefined,
      user: 0,
    },
  })

  const onClick = () => {
    form.register('createAt')
    form.setValue('createAt', new Date())
    form.handleSubmit(onSubmit)()
  }

  const onSubmit = (values: z.infer<typeof CommentSchema>) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-1"
      >
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="댓글을 작성하세요." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-end">
          <Button onClick={onClick} size="md">
            작성하기
          </Button>
        </div>
      </form>
    </Form>
  )
}
