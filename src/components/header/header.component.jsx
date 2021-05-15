import React from 'react'
import { connect } from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {ReactComponent as Logo} from '../../assets/crown.svg'

import {selectCurrentUser} from '../../redux/user/user-selectors'
import {selectCartHidden} from '../../redux/cart/cart-selectors'
import {
    HeaderContainer,
    OptionContainerLink,
    OptionsContainer,
    LogoContainer
} from './header.styles';

import { auth } from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart-dropdown/cart-dropdown.component';

const mapStateToProps = createStructuredSelector(
    {
      currentUser : selectCurrentUser,
      isCartHidden: selectCartHidden
    }
)

const Header = ({currentUser,isCartHidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo />
        </LogoContainer>
        <OptionsContainer>
            <OptionContainerLink to="/shop" activeClassName="selected">
                SHOP
            </OptionContainerLink>
            <OptionContainerLink to="/test" activeClassName="selected">
                Test
            </OptionContainerLink>
        { currentUser 
            ? <OptionContainerLink as='div' onClick={()=>auth.signOut()}>SIGN OUT</OptionContainerLink>
            : <OptionContainerLink to="/signin" activeClassName="selected">SIGN IN</OptionContainerLink>
        }
            <CartIcon />
        </OptionsContainer>
        { isCartHidden ? null : <Cart /> }
    </HeaderContainer>

)

export default connect(mapStateToProps)(Header)
