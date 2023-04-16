import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contexts';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.style.scss';
import React from 'react';


const CartDropdown = () => {

    const {cartItems}=  useContext(CartContext);

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) =>  (
                <CartItem key= {item.id} cartItem={item}/>))}
            </div>
             <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
} 

export default CartDropdown;
