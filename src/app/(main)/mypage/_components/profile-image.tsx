'use client'

import { useRef } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Form, FormField, FormItem } from '@/components/ui/form'
import { UserAvatar } from '@/components/user/user-avatar'
import { EditProfileImageSchema } from '@/schema'
import { useUserStore } from '@/store/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const ProfileImage = () => {
  const { profileImage, setProfileImage } = useUserStore()
  const hiddenInputRef = useRef<HTMLInputElement | null>(null)

  const form = useForm<z.infer<typeof EditProfileImageSchema>>({
    resolver: zodResolver(EditProfileImageSchema),
  })

  const uploadProfileImage = () => {
    console.log('이미지 업로드 api 보내기')
    const userImage = form.getValues('image')
    if (userImage) {
      const userImageUrl = URL.createObjectURL(userImage)
      setProfileImage(userImageUrl)
    }
  }

  const deleteProfileImage = () => {
    console.log('삭제하기 api 보내기')
    setProfileImage('')
  }

  return (
    <div className="flex flex-col gap-5">
      <UserAvatar size="lg" userImage={profileImage} />
      <Form {...form}>
        <form className="w-fit flex flex-col gap-2">
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <input
                  type="file"
                  className="invisible w-0"
                  accept=".png, .jpeg"
                  ref={(e) => {
                    field.ref
                    hiddenInputRef.current = e
                  }}
                  onChange={(e) => {
                    field.onChange(e.target.files ? e.target.files[0] : null)
                    uploadProfileImage()
                  }}
                />
                <Button
                  type="button"
                  onClick={() => hiddenInputRef.current?.click()}
                >
                  이미지 업로드
                </Button>
              </FormItem>
            )}
          />
          <Button
            type="button"
            variant="secondary"
            onClick={deleteProfileImage}
          >
            이미지 제거
          </Button>
        </form>
      </Form>
    </div>
  )
}
