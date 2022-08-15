import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";
import { ToggleCartContext } from "../../contexts/toggle-cart.context";

import './cart-icon.styles.scss';


const CartIcon = () => {
    const { cartItems } = useContext(ToggleCartContext)
    const quantity = cartItems.reduce((acc, item) => { return acc + item.quantity }, 0)
    return (
        <div className="cart-icon-container">
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{quantity}</span>
        </div>
    )
}

export default CartIcon