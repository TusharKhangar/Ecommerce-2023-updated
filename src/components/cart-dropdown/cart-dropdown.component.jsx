import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.style.scss';
import React from 'react';

const CartDropdown = () => {
    return(
        <div className='cart-dropdown-container'>
            <div className="cart-items"></div>
             <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
} 

export default CartDropdown;
