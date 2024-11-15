import { products as initialProducts} from './mocks/products.json'
import {Products} from "./components/Products"
import {  useState } from 'react'
import { Headers } from './components/Headers'
import { Footer } from './components/Footer'
import { SCOPE_DEVELOPMENT } from './config'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart'



function App() {
  
  const [ products ] = useState(initialProducts)
  const { filters,filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Headers />
      <Cart />
      <Products products={filteredProducts}/>
      
      {SCOPE_DEVELOPMENT && <Footer />}
    </>
    
  )
  
}

export default App
