import { 
    DropdownMenu, 
    // DropdownMenuContent, 
    // DropdownMenuItem, 
    DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { ProfileAvatar } from "@/components/profile-avatar"
import Link from "next/link"

export const ProfileMenu = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <Link href='/auth/login'>
                <ProfileAvatar />
            </Link>
        </DropdownMenuTrigger>

        {/* auth 추가 후 수정 */}
        {/* <DropdownMenuContent className="mt-4">
            <DropdownMenuItem>
                <Link href='/profile'>마이페이지</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>로그아웃</DropdownMenuItem>
        </DropdownMenuContent>  */}
    </DropdownMenu>
  )
}
