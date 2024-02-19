import { z } from 'zod'
import data from '../data.json'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const slug = z.string().parse(params.slug)
  const product = data.products.find((e) => e.slug === slug)

  if (!product) {
    return Response.json({ message: 'product not found' }, { status: 400 })
  }

  return Response.json(product)
}
