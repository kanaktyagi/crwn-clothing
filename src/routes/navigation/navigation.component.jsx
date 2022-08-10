import {Outlet,Link} from 'react-router-dom'
import './navigation.styles.scss'
import { ReactComponent as Crwnlogo } from '../../assests/crown.svg'
import { useContext } from 'react'
import { UserContent } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'

const Navigation =() => {
    const {currentUser} = useContext(UserContent)

    
    return (
      <>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
            <Crwnlogo className='logo'/>
            </Link>
            <div className='nav-links-container'>
             <Link className='nav-link' to="/shop">
                SHOP
             </Link>
             {currentUser ? (
                <span className='nav-link' onClick={signOutUser}>SIGN-OUT</span>
             ): (
                <Link className='nav-link' to="/auth">
                SIGN-IN
             </Link>
             )}
            
            </div>
        </div>
        <Outlet/>
      </>
    )
  }

  export default Navigation