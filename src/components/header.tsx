import Image from 'next/image'
import Link from 'next/link'
import { CartWidget } from './cart-widget'
import { SearchProduct } from './search-product'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          Devstore
        </Link>

        <SearchProduct />
      </div>
      <nav className="flex items-center gap-4">
        <CartWidget />

        <div className="w-px h-4 bg-zinc-400" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">account</span>
          <Image
            src="https://github.com/fischerrobson.png"
            className="w-6 h-6 rounded-full"
            width={24}
            height={24}
            alt="avatar"
          />
        </Link>
      </nav>
    </header>
  )
}
