import React, { useContext } from 'react'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { ToggleCartContext } from '../../contexts/toggle-cart.context'
import './checkout.styles.scss'

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemFromCart } = useContext(ToggleCartContext)
    const addItem = (cartItem) => addItemToCart(cartItem)
    const removeItem = (id) => removeItemFromCart(id)

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>

            {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />

            )}
            <span className='total'>Total: 0</span>
        </div>
    )
}

export default Checkout