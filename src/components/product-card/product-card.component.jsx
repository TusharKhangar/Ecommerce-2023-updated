import { useContext } from 'react';
import CustomButton , {BUTTON_TYPE_CLASSES} from '../custom-button/custom-button.component'
import {
    ProductCardContainer,
    Footer,
    Name,
    Price,
  } from './product-card.style'
import { CartContext } from '../../contexts/cart.contexts';


const ProductCard = ({product}) => {
    const {name , price ,imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product)

    return(<ProductCardContainer>
        <img src={imageUrl} alt={`${name }`} />
        <Footer>
            <Name>{name}</Name>
            <Price>{price}</Price>
        </Footer>
        <CustomButton buttonType={BUTTON_TYPE_CLASSES.inverted} onClick= {addProductToCart}>Add to Cart</CustomButton>
    </ProductCardContainer>)
}
export default ProductCard;