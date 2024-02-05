import { ProductGrid } from '@/components/product-grid'
import { api } from '../data/api'
import { Product } from '../data/types/product'

export default async function Home() {
  const response = await api('/products/featured')
  const products: Product[] = await response.json()

  return (
    <main className="grid max-h-[820px] grid-cols-9 grid-rows-6 gap-6">
      {products.map((product, index) => {
        return (
          <ProductGrid
            key={product.id}
            product={product}
            isMain={index === 0}
          />
        )
      })}
    </main>
  )
}
