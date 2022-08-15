import { children, createContext, useState } from "react";

export const ToggleCartContext = createContext({
    toggleCart: false,
    changeToggleCart: () => null,
    cartItems: [],
    addItemToCart: () => { }
})
const addCartItem = (cartItems, productToAdd) => {
    const existingCardItem = cartItems.find(item => item.id === productToAdd.id)
    if (existingCardItem) {
        return cartItems.map(cartItems => cartItems.id === productToAdd.id ?
            { ...cartItems, quantity: cartItems.quantity + 1 } : cartItems)
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }]

}
export const ToggleCartProvider = ({ children }) => {
    const [toggleCart, setToggleCart] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const changeToggleCart = () => {
        setToggleCart(prevState => !prevState)
    }

    const value = {
        toggleCart,
        changeToggleCart,
        addItemToCart,
        cartItems
    }
    return (
        <ToggleCartContext.Provider value={value}>
            {children}
        </ToggleCartContext.Provider>
    )

}