import { useContext } from 'react';
import { ToggleCartContext } from '../../contexts/toggle-cart.context';
import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem }) => {
    const { id, name, imageUrl, price, quantity } = cartItem;
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(ToggleCartContext)
    const addItem = (cartItem) => addItemToCart(cartItem)
    const removeItem = (id) => removeItemFromCart(id)
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(id)}>&#10094;</div>
                {quantity}
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={() => clearItemFromCart(id)}>&#10005;</span>
        </div>
    )
}

export default CheckoutItem