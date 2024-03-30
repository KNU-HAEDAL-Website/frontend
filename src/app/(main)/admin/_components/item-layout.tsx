import { Label } from "@/components/ui/label"

interface ItemLayoutProps {
    title: string
    children: React.ReactNode
}
export const ItemLayout = ({
    title,
    children
}: ItemLayoutProps) => {
  return (
    <div className="flex flex-col py-2 gap-2">
      <Label className="font-semibold text-xl">{title}</Label>
      <div>
          {children}
      </div>
    </div>
  )
}
