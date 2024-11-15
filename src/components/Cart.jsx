import { useId } from "react"
import { ClearCartIcon, 
    RemoveFromCartIcon,
    CartIcon
 } from "./Icons"

export function Cart () {
    const cartCheckboxId = useId()
    return (
        <>
            <label htmlFor={cartCheckboxId} className="cart-button">
                <CartIcon />
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden/>
            <aside className="cart">
                <ul>
                    <li>
                        <img src="" alt="Iphone" />
                        <div>
                            <strong>iPhone</strong>   - $ 1499
                        </div>
                        <footer>
                            <small>
                                Qty: 1
                            </small>
                            <button>+</button>
                        </footer>
                    </li>
                </ul>
                <button>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}