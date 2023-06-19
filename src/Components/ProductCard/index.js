import { useContext, useEffect, useState } from 'react';
import { HomeContext } from '../../Context/HomeContext';
import { RoundIconButton } from '../RoundIconButton';

import './ProductCard.css';

function ProductCard({productData}){
    const {name, category, price, image} = productData;

    const {
        openHomeAside, 
        displayProductDetail, 
        setProductClicked,
        addProductToShoppingCart,
        deleteProductFromShoppingCart,
        shoppingCartList
    } = useContext(HomeContext);


    const onProductClicked = () => {
        setProductClicked(productData);
        openHomeAside();
        displayProductDetail();
    }

    const addProductToCart = () => {addProductToShoppingCart(productData);} 
    const deleteProductFromCart = () => {deleteProductFromShoppingCart(productData.id);}

    const [isProductInCart, setIsProductInCart] = useState(false);

    useEffect(() => {
        const result = shoppingCartList.filter((product) => product.id === productData.id);
        setIsProductInCart(result.length !== 0)
    }, [shoppingCartList]);

    return (
        <div className='product-card'>
            {!isProductInCart
                ? <RoundIconButton iconType='plus' onClick={addProductToCart}/>
                : <RoundIconButton iconType='check' onClick={deleteProductFromCart} state={isProductInCart} />
            }
            <div className='product-card-content' onClick={onProductClicked}>
                <figure>
                    <img src={image} alt={`${name}.`}/>
                    <span className='product-category'>{category}</span>

                </figure>
                <div className='product-card-info'>
                    <span className='product-name'>{name}</span>
                    <span className='product-price'>S/{price}</span>
                </div>
            </div>
        </div>
    );
}

export { ProductCard };