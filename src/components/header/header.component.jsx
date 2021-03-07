import React from 'react'
import { connect } from 'react-redux';

import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'

import './header.styles.scss';
import { auth } from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart-dropdown/cart-dropdown.component';
// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = ({user: {currentUser},cart: {isCartHidden}}) => {
    return {
      currentUser,
      isCartHidden
    }
  }

const Header = ({currentUser,isCartHidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
        { currentUser 
            ? <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
            : <Link className="option" to="/signin">SIGN IN</Link>
        }
            <CartIcon />
        </div>
        { isCartHidden ? null : <Cart /> }
    </div>

)

export default connect(mapStateToProps)(Header)
