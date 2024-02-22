import { api } from '@/app/data/api'
import { Product } from '@/app/data/types/product'
import { ProductSearchGrid } from '@/components/product-search-grid'
import { redirect } from 'next/navigation'

type SearchPageProps = {
  // params: {}
  searchParams: {
    q: string
  }
}

async function getProducts(query: string) {
  const response = await api(`/products/search?q=${query}`)
  const data: Product[] = await response.json()

  return data
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  if (!searchParams.q) redirect('/')

  const products = await getProducts(searchParams.q)

  return (
    <div className="flex flex-col gap-4">
      <p>
        Resultados para: <span className="font-semibold">{searchParams.q}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.map((prod) => {
          return <ProductSearchGrid key={prod.id} product={prod} />
        })}
      </div>
    </div>
  )
}
