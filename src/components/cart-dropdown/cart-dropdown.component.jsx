import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.contexts';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer,EmpytyMessage,CartItems} from './cart-dropdown.style';
import React from 'react';



const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToChekoutHandler = () => {
        navigate('/checkout')
    }
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)) : (<EmpytyMessage>Your cart is Empty</EmpytyMessage>)}
            </CartItems>
            <CustomButton onClick={goToChekoutHandler}>GO TO CHECKOUT</CustomButton>
        </CartDropdownContainer>
    )
}

export default CartDropdown;
