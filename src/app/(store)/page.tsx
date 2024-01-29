import { ProductGrid } from '@/components/product-grid'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="grid max-h-[820px] grid-cols-9 grid-rows-6 gap-6">
      <ProductGrid src="/moletom-java.png" isMain />
      <ProductGrid src="/moletom-never-stop-learning.png" />
      <ProductGrid src="/moletom-ai-side.png" />
    </main>
  )
}
