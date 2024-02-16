import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from '@/components/ui/avatar'

export const Profile = () => {
    return(
        <Avatar>
            <AvatarImage />
            <AvatarFallback className='text-primary'>
                test
            </AvatarFallback>
        </Avatar>
    )
}