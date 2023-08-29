import React from 'react'
import { createContext, useState } from 'react'

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({children})=>{

    const [cart, setCart] = useState ([])


    return(

        <CartContext.Provider value ={{cart, setCart}}>
            {children}
        </CartContext.Provider>

    )
}



const ShoppingCartContext = () => {
  return (
    <div>
      
    </div>
  )
}

export default ShoppingCartContext
