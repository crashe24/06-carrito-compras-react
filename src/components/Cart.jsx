import { useId } from "react"
import './cart.css'
import { ClearCartIcon, 
    CartIcon
 } from "./Icons"
import { useCart } from "../hooks/useCart"

export function ItemCart ({item, addCart}) {
    return (
        <li>
        <img src={item.thumbnail} alt="Iphone" />
        <div>
            <strong>{item.title}</strong>   - ${item.price}
        </div>
        <footer>
            <small>
                Qty: {item.quantity}
            </small>
            <button onClick={() => addCart(item)}>+</button>
        </footer>
    </li>
    )
}

export function Cart () {
    const cartCheckboxId = useId()
    const {cart, clearCart, addCart} = useCart()
    return (
        <>
            <label htmlFor={cartCheckboxId} className="cart-button">
                <CartIcon />
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden/>
            <aside className="cart">
                <ul>
                  {cart.map( item => (
                    <ItemCart key={item.id} item={item}  addCart={addCart}/>
                  ))}
                </ul>
                <button onClick={clearCart}>
                    <ClearCartIcon  />
                </button>
            </aside>
        </>
    )
}