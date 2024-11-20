import { products as initialProducts} from './mocks/products.json'
import {Products} from "./components/Products"
import {  useState } from 'react'
import { Headers } from './components/Headers'
import { Footer } from './components/Footer'
import { SCOPE_DEVELOPMENT } from './config'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cartContex'



function App() {
  
  const [ products ] = useState(initialProducts)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Headers />
      <Cart />
      <Products products={filteredProducts}/>
      
      {SCOPE_DEVELOPMENT && <Footer />}
    </CartProvider>
    
  )
  
}

export default App
