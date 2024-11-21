import { useCart } from "../hooks/useCart"
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"
import './Products.css'

export function ProductItem ({product, isProductInCart}) {
    const { addCart, removeCart} = useCart()
    return (
    <li key={product.id}>
    <img src={product.thumbnail} alt={product.title} />
    <div>
        <strong>{product.title}</strong> -$ { product.price}
    </div>
    <div>
        <button 
            style = {{ backgroundColor: isProductInCart?'red':'#89f'}}
            onClick={()=> {
            isProductInCart ? removeCart(product) : addCart(product)
        }}>
            {
                isProductInCart ? <RemoveFromCartIcon />
                                : <AddToCartIcon />
            }
            
        </button>
    </div>
</li>
    )
}

export function Products ({products}) {
    const {cart} = useCart()
    
    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }
    return (
        <>
       <main className="products">
            <ul>
                {products.slice(0,10).map( product => {
                    const isProductInCart = checkProductInCart(product)
                    return (
                        <ProductItem product={product} key={product.id} isProductInCart={isProductInCart}/>
                    )})}
            </ul>
        </main>
        </>
        
    )
}

