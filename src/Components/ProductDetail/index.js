import { useContext } from 'react';
import { HomeContext } from '../../Context/HomeContext';
import { HomeAside } from '../HomeAside';

import './ProductDetail.css';

function ProductDetail(){
    const {productClicked} = useContext(HomeContext);

    const {id, stock, name, category, price, description, image} = productClicked;

    return (
        <HomeAside>
            <div className='product-detail'>
                <figure>
                    <img src={image} alt={`${name}.`}/>
                    <span className='product-category'>{category}</span>
                </figure>

                <div className='product-detail-info'>
                    <div className='product-detail-sub-info'>
                        <span className='product-id'>ID: {id}</span>
                        <span className='product-stock'>Stock: {stock}</span>
                    </div>

                    <div className='product-detail-sub-info'>
                        <span className='product-name'>{name}</span>
                        <span className='product-price'>S/{price}</span>
                    </div>

                    <span className='product-description'>{description}</span>
                </div>
            </div>
        </HomeAside>
    );
}

export {ProductDetail};