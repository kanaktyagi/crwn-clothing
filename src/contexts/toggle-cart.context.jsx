import { children, createContext,useState } from "react";

 export const ToggleCartContext = createContext({
    toggleCart: false,
    changeToggleCart: () => null
 })

 export const ToggleCartProvider = ({children}) => {
    const [toggleCart, setToggleCart] = useState(false)

    const changeToggleCart = () => {
        setToggleCart(prevState => !prevState)
    }

    const value = {
        toggleCart,
        changeToggleCart
    }
   return(
    <ToggleCartContext.Provider value={value}>
        {children}
    </ToggleCartContext.Provider>
   )

 }