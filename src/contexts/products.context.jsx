import { useContext, createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
  products: []

})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // }, [])
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      console.log("categoryMap", categoryMap)
    }
    getCategoriesMap()
  }, [])
  const value = {
    products
  }

  return (<ProductsContext.Provider value={value}>
    {console.log("pro", products)}
    {children}
  </ProductsContext.Provider>
  )

}

