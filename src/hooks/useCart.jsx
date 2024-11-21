import { useContext } from "react";
import { CartContext } from "../context/cartContex";


export const useCart = () => {
    const {cart,
        addCart,
        clearCart,
        removeCart} = useContext(CartContext)

    if (cart === undefined) {
        throw new Error('useCart must be used within a CartonProvider')
    }
    return {cart,
        addCart,
        clearCart,
        removeCart}
}
