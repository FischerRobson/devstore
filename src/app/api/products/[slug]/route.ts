import { z } from 'zod'
import data from '../data.json'

type GetProductParams = {
  params: { slug: string }
}

export async function GET(request: Request, { params }: GetProductParams) {
  const slug = z.string().parse(params.slug)
  const product = data.products.find((e) => e.slug === slug)

  if (!product) {
    return Response.json({ message: 'product not found' }, { status: 400 })
  }

  return Response.json(product)
}
