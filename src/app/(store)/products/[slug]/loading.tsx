import { Skeleton } from '@/components/skeleton'

export default function Loading() {
  return (
    <div className="relative grid max-h-[840px] grid-cols-3">
      <Skeleton className="col-span-2 overflow-hidden h-[1000px] w-[1000px]" />
      <Skeleton className="" />
    </div>
  )
}
