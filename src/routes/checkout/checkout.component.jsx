import React, { useContext } from 'react'
import { ToggleCartContext } from '../../contexts/toggle-cart.context'

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemFromCart } = useContext(ToggleCartContext)
    const addItem = (cartItem) => addItemToCart(cartItem)
    const removeItem = (id) => removeItemFromCart(id)

    return (
        <div>
            <div>
                {cartItems.map(cartItem => {
                    const { id, name, quantity } = cartItem
                    return (
                        <div key={id}>
                            <h2>{name}</h2>
                            <span onClick={() => removeItem(id)}> - </span> <span>{quantity}</span> <span onClick={() => addItem(cartItem)}> +</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Checkout