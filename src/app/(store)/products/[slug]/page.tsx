import { Metadata } from 'next'
import Image from 'next/image'
import { api } from '@/app/data/api'
import { Product } from '@/app/data/types/product'
import { SizeButton } from '@/components/product-page/size-button'
import { AddToCartButton } from '@/components/product-page/add-to-cart-button'

type PageParams = {
  params: {
    slug: string
  }
}

// React use memoization to prevent this api call to be duplicated
async function getProduct(slug: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  const product: Product = await response.json()
  return product
}

// eslint-disable-next-line prettier/prettier
export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const product = await getProduct(params.slug)
  return {
    title: product.title,
  }
}

// for generate static pages during build
export async function generateStaticParams() {
  const response = await api('/products/featured')
  const data = await response.json()

  return data.map((product: Product) => {
    return {
      slug: product.slug,
    }
  })
}

export default async function ProductPage({ params }: PageParams) {
  const product = await getProduct(params.slug)

  return (
    <div className="relative grid max-h-[840px] grid-cols-3">
      <section className="col-span-2 overflow-hidden">
        <Image
          src={product.image}
          alt=""
          width={1000}
          height={1000}
          quality={100}
        />
      </section>
      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>

        <p className="mt-2 leading-relaxed text-zinc-450">
          {product.description}
        </p>
        <div className="mt-8 flex items-center gap-3">
          <span className="flex items-center justify-center rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.price)}
          </span>
          <span className="text-sm text-zinc-450">
            12x sem juros de{' '}
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.price / 12)}
          </span>
        </div>
        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>
          <div className="flex gap-2">
            <SizeButton size="P" />
            <SizeButton size="M" />
            <SizeButton size="G" />
            <SizeButton size="GG" />
          </div>
        </div>
        <AddToCartButton productId={product.id} />
      </div>
    </div>
  )
}
