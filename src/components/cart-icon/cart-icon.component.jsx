import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.contexts';
import  {ShoppingIcon,CartIconContainer,ItemCount} from './cart-icon.style';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen,cartCount } = useContext(CartContext);
  
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  
    return (
      <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon' />
        <ItemCount>{cartCount}</ItemCount>
      </CartIconContainer>
    );
  };
export default CartIcon;
