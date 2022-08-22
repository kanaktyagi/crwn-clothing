import { Outlet, Link } from 'react-router-dom'
import './navigation.styles.scss'
import { ReactComponent as Crwnlogo } from '../../assests/crown.svg'
import { useContext } from 'react'
// import { UserContent } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { ToggleCartContext } from '../../contexts/toggle-cart.context'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector'

const Navigation = () => {
   // const { currentUser } = useContext(UserContent)
   const { toggleCart, changeToggleCart } = useContext(ToggleCartContext)
   const currentUser = useSelector(selectCurrentUser)





   return (
      <>
         <div className='navigation'>
            <Link className='logo-container' to='/'>
               <Crwnlogo className='logo' />
            </Link>
            <div className='nav-links-container'>
               <Link className='nav-link' to="/shop">
                  SHOP
               </Link>
               {currentUser ? (
                  <span className='nav-link' onClick={signOutUser}>SIGN-OUT</span>
               ) : (
                  <Link className='nav-link' to="/auth">
                     SIGN-IN
                  </Link>
               )}
               <div onClick={changeToggleCart}>
                  <CartIcon />
               </div>
            </div>

            {toggleCart && <CartDropdown />}

         </div>
         <Outlet />
      </>
   )
}

export default Navigation