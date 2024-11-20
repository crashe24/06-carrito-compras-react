import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({children}) {
   const [ cart, setCart] = useState([])
   // adherir carrito
   const addCart = product  => {
    const productInCartIndex = cart.findIndex(
        item => item.id === product.id
    )
    if (productInCartIndex >= 0 ) {
        const newCart = structuredClone(cart)
        newCart[productInCartIndex].quantity +=1
        return setCart(newCart)
    }
    setCart(precState => ([
        ...precState,{
            ...product,
            quantity:1
        }
    ]))
   }
   // limpiar el carrito
   const clearCart = () => {setCart([])}
   return ( 
    <CartContext.Provider value={{
        cart,
        addCart,
        clearCart
    }}>
        {children}
    </CartContext.Provider>)
}


