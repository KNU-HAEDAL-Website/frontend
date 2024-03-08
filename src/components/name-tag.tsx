export const NameTag = ({ name }: { name: string }) => {
  return (
    <div className="rounded-2xl border border-input px-2 py-0.5 text-sm font-normal w-fit bg-secondary/50">
      {name}
    </div>
  )
}
