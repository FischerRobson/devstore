'use client'
import { ReactNode, createContext, useContext, useState } from 'react'

type CartItem = {
  productId: number
  quantity: number
}

type CartContext = {
  items: CartItem[]
  addToCart: (productId: number) => void
}

type CartContextProps = {
  children: ReactNode
}

const CartContext = createContext({} as CartContext)

export function CartContextProvider({ children }: CartContextProps) {
  const [items, setItems] = useState<CartItem[]>([])

  function addToCart(productId: number) {
    setItems((prev) => {
      const productInCart = prev.find((prod) => prod.productId === productId)

      if (productInCart) {
        const otherProducts = prev.filter(
          (prod) => prod.productId !== productId,
        )
        return [
          ...otherProducts,
          { productId, quantity: productInCart.quantity + 1 },
        ]
      } else {
        return [...prev, { productId, quantity: 1 }]
      }
    })
  }

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
