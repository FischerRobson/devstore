import { Product } from '@/app/data/types/product'
import Image from 'next/image'
import Link from 'next/link'

type ProductSearchGridProps = {
  product: Product
}

export function ProductSearchGrid({ product }: ProductSearchGridProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={`group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center`}
    >
      <Image
        alt="outfit"
        src={product.image}
        width={400}
        height={400}
        quality={100}
        className="group-hover:scale-105 transition-transform"
      />
      <div className="absolute bottom-14 right-14 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
        <span className="text-sm truncate">{product.title}</span>
        <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-5 font-semibold">
          {product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
      </div>
    </Link>
  )
}
