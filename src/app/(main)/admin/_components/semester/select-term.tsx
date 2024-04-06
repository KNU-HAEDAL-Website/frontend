import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface SelectTermProps {
  onChange: (value: string) => void
}

export const SelectTerm = ({ onChange }: SelectTermProps) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="학기" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">1학기</SelectItem>
        <SelectItem value="2">2학기</SelectItem>
      </SelectContent>
    </Select>
  )
}
