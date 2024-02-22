import { Skeleton } from '@/components/skeleton'

export default function SearchLoading() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="grid-cols-1 h-[400px]" />
        <Skeleton className="grid-cols-1 h-[400px]" />
        <Skeleton className="grid-cols-1 h-[400px]" />
      </div>
    </div>
  )
}
