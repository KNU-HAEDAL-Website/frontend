export const NameLabel = ({ name }: { name: string }) => {
  return (
    <div className="w-fit rounded-2xl border border-input bg-secondary/50 px-2 py-0.5 text-xs font-normal md:text-sm">
      {name}
    </div>
  )
}
