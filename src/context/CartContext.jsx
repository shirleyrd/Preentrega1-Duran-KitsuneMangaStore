import React from 'react'
import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {

const [cart, setCart] = useState ([])


const addCart = (item, cantidad)  => {
  const addItem = {...item, cantidad}
  const newCart = [...cart]
  const inCart = newCart.find((producto) => producto.id === addItem.id)

  if (inCart) {
    inCart.cantidad += cantidad

  } else {
    newCart.push(addItem)
  }
  setCart(newCart)
}

const cartAmount = () => {
  return cart.reduce((acc,prod) => acc + prod.cantidad, 0)
}

const precioTotal = () => {
  return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);

}
const emptyCart = () => {
  setCart ([])
}


return (
  <CartContext.Provider value={ {
    cart,
    addCart,
    cartAmount,
    precioTotal,
    emptyCart
} }>
  
  {children}
</CartContext.Provider>
)


}
 
export default CartProvider