import { createContext, useReducer, useState } from "react";
import { CART_ACTION_TYPES, cartReducer, initialState } from "../reducers/cartReducer";

export const CartContext = createContext()


export function useCartReducer () {
    
   const [state, dispatch] = useReducer(cartReducer,initialState)
   const addCart = product => dispatch({
        type: CART_ACTION_TYPES.ADD_TO_CART,
        payload: product
   })
   const removeCart = product => dispatch({
        type: CART_ACTION_TYPES.REMOVE_FROM_CART,
        payload: product
   })

   const clearCart = () => dispatch({
        type: CART_ACTION_TYPES.CLEAR_CAR
   })

    return {
        state, addCart, removeCart,clearCart
    }
}


export function CartProvider({children}) {
   const {state, addCart,removeCart,clearCart} = useCartReducer()
   //const [ cart, setCart] = useState([])
   // adherir carrito
   /*
   const addCart = product  => {
    const productInCartIndex = cart.findIndex(
        item => item.id === product.id
    )
    if (productInCartIndex >= 0 ) {
        const newCart = structuredClone(cart)
        newCart[productInCartIndex].quantity +=1
        return setCart(newCart)
    }
    setCart(prevState => ([
        ...prevState,{
            ...product,
            quantity:1
        }
    ]))
   }

   const removeCart = product => {
    console.log('remove')
    setCart(prevState =>  prevState.filter( item => item.id != product.id))
   }

   // limpiar el carrito
   const clearCart = () => {setCart([])}
   */
   return ( 
    <CartContext.Provider value={{
        cart: state,
        addCart,
        clearCart,
        removeCart
    }}>
        {children}
    </CartContext.Provider>)
}


