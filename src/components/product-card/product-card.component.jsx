import { useContext } from 'react';
import { ToggleCartContext } from '../../contexts/toggle-cart.context';
import Button from '../button/button.component'
import './product-card.styles.scss'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(ToggleCartContext)

    const addProductToCart = () => addItemToCart(product)
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button button_type="inverted" onClick={addProductToCart}>Add to cart</Button>
        </div>
    )
}

export default ProductCard