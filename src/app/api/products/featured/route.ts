import data from '../data.json'

export async function GET() {
  const featuredProducts = data.products.filter((prod) => prod.featured)

  return Response.json(featuredProducts)
}
