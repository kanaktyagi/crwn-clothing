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
const removeCartItem = (cartItems, id) => {
    const existingCardItem = cartItems.find(item => item.id === id)
    console.log("existingCartItem", existingCardItem)
    if (existingCardItem) {
        if (existingCardItem.quantity === 1) {
            return cartItems.filter(cartItem => cartItem.id !== id)
        }
        else {
            return cartItems.map(cartItem => cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
        }
    }
}
export const ToggleCartProvider = ({ children }) => {
    const [toggleCart, setToggleCart] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeItemFromCart = (id) => {
        setCartItems(removeCartItem(cartItems, id))
    }

    const changeToggleCart = () => {
        setToggleCart(prevState => !prevState)
    }

    const value = {
        toggleCart,
        changeToggleCart,
        addItemToCart,
        cartItems,
        removeItemFromCart

    }
    return (
        <ToggleCartContext.Provider value={value}>
            {children}
        </ToggleCartContext.Provider>
    )

}