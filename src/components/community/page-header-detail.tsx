import { NameTag } from '@/components/name-tag'

export const PageHeaderDetail = ({ detail }: { detail: Board }) => {
  return (
    <div className="text-primary flex flex-col gap-1">
      <div className="text-2xl font-semibold">{detail.name}</div>
      <div className="flex flex-wrap gap-2">
        {detail.personnel?.map((member) => (
          <NameTag key={member.studentId} name={member.name} />
        ))}
      </div>
      <div className="pt-3 text-primary/70">&nbsp; {detail.intro}</div>
    </div>
  )
}
