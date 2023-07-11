import { useContext } from 'react';
import { Icons } from '../../Icons';
import { HomeContext } from '../../Context/HomeContext';
import './ShoppingCartCard.css'

function ShoppingCartCard({id, image, name, price, canDelete=true}){
    const {deleteProductFromShoppingCart} = useContext(HomeContext)

    const deleteProductFromCart = () => {deleteProductFromShoppingCart(id);}

    return (
        <div className="shopping-cart-card">
            <img src={image} alt={`${name} reference.`} />
            <span className="product-name">{name}</span>
            <span className="product-price">S/{price}</span>
            {canDelete && <Icons iconType='x-mark' size='24px' color='var(--main-color)' onClick={deleteProductFromCart}/>}
        </div>
    );
};

export { ShoppingCartCard };

