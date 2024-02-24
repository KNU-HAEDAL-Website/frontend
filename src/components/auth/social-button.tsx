import Image from 'next/image'
import { Button } from '@/components/ui/button'

export const SocialButton = () => {
  // const onClick = (provider: "google") => {
  //     // 콜백 URL 추가
  // }
  return (
    <div className='w-full flex justify-center gap-8'>
      <Button
        variant="link"
        size="login"
        //onClick={()=>onClick('google')}
      >
        <Image
          src="/google-logo.svg"
          alt="googleLogin"
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-full"
        />
      </Button>
      <Button
        variant="link"
        size="login"
        //onClick={()=>onClick('github')}
      >
        <Image
          src="/github-logo.svg"
          alt="githubLogin"
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-full"
        />
      </Button>
    </div>
  )
}
