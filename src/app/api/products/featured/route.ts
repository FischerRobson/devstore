import data from '../data.json'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 4000))
  const featuredProducts = data.products.filter((prod) => prod.featured)

  return Response.json(featuredProducts)
}
