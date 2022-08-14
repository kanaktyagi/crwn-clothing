import { useContext, createContext, useState, useEffect } from "react";
import PRODUCTS from '../shop-data.json'

export const ProductsContext = createContext({
  products:[]

})

export const ProductsProvider = ({children}) => {
     const [products, setProducts] = useState(PRODUCTS)
     const value = {
        products
     }
  
    return ( <ProductsContext.Provider value={value}>
        {console.log("pro", products)}
        {children}
        </ProductsContext.Provider>
    )

}

