import {Outlet,Link} from 'react-router-dom'
import './navigation.styles.scss'
import { ReactComponent as Crwnlogo } from '../../assests/crown.svg'
import { useContext } from 'react'
import { UserContent } from '../../contexts/user.context'

const Navigation =() => {
    const {currentUser} = useContext(UserContent)
    console.log("currentUser", currentUser)
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
             <Link className='nav-link' to="/auth">
                SIGN-IN
             </Link>
            </div>
        </div>
        <Outlet/>
      </>
    )
  }

  export default Navigation