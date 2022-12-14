import { Outlet, Link } from 'react-router-dom'
import './navigation.styles.scss'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import { useSelector } from 'react-redux'
import { selectorCurrentUser } from '../../store/user/user.selector'
import { selectIsCartOpen } from '../../store/cart/cart.selector'
// import { selectCartMap } from '../../store/cart/cart.selector'

const Navigation = () => {
  const currentUser = useSelector(selectorCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)

  // const { isCartOpen } = useContext(CartContext)
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  )
}
export default Navigation
