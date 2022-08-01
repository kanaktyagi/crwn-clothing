import {Outlet,Link} from 'react-router-dom'
import './navigation.styles.scss'
import { ReactComponent as Crwnlogo } from '../../assests/crown.svg'

const Navigation =() => {
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
             <Link className='nav-link' to="/signIn">
                SIGN-IN
             </Link>
            </div>
        </div>
        <Outlet/>
      </>
    )
  }

  export default Navigation