import { ShoppingCartCard } from '../../Components/ShoppingCartCard';
import { BackButton } from '../../Components/BackButton';
import { getLocalISODate } from '../../utils/formatDate';
import { getOrderById } from '../../utils/request';

import './MyOrder.css';
import { useContext, useEffect, useState } from 'react';
import { HomeContext } from '../../Context/HomeContext';

function MyOrder(){
    const {signInUserId} = useContext(HomeContext);
    const [order, setOrder] = useState({})
    const currentPath = window.location.hash;
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

    useEffect(() => {
            getOrderById(signInUserId, index)
            .then(response => {setOrder(response)});
        }
    , []) 
      
    return (
        <div className='my-order-container'>
            <BackButton to={'/my-profile'}/>
            <div className='my-order'>
                <h1>PEDIDO REALIZADO CON ÉXITO</h1>

                <div className='my-order-info'>
                    <span className='order-id'>ID: {order.id} </span>
                    <span className='order-user-id'>ID del usuario: {order.userID} </span>
                    <span className='order-date'>Fecha: {getLocalISODate(new Date(order.date))}</span>
                </div>

                <ul className="order-products-list">
                        {order.products?.map(product => 
                            {
                                return (
                                <li key={product.id}>
                                    <ShoppingCartCard id={product.id} image={product.image} name={product.name} price={product.price} canDelete={false} />
                                </li>
                                )
                            }
                        )}
                </ul>

                <h2>TOTAL: S/{order.totalPrice}</h2>
            </div>
        </div>
    );
}

export { MyOrder };