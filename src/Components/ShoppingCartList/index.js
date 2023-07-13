import { useContext } from "react";
import { HomeAside } from "../HomeAside";
import { HomeContext } from "../../Context/HomeContext";
import { ShoppingCartCard } from "../ShoppingCartCard";
import { RoundButton } from "../RoundButton";
import { useNavigate } from "react-router-dom";

import './ShoppingCartList.css';
import { addOrder } from "../../utils/request";

function ShoppingCartList(){
    const navigate = useNavigate();
    const {shoppingCartList, signInUserId} = useContext(HomeContext);

    let totalPrice = 0;

    const createOrder = () => {
        return {
            'userID': signInUserId,
            'products': shoppingCartList.map(product => product.id).join(','),
            'totalPrice': totalPrice,
            'date': new Date().toISOString()
        }
    }

    const onClickMakeOrder = () => {
        const order = createOrder()
        if(signInUserId === ''){
            navigate('/sign-in')
        }else if(order.products !== ''){
            addOrder(order).then(response => {
                if(response === 'SUCCESS'){
                    navigate('/my-orders/last');
                }
            })
        }
    }

    return(
        <HomeAside>
            <div id="shopping-cart-list">
                <h1>CARRITO DE COMPRAS</h1>
                <ul className="shopping-cart-list">
                    {shoppingCartList.map(product => 
                        {
                            totalPrice += parseFloat(product.price);
                            return (
                            <li key={product.id}>
                                <ShoppingCartCard id={product.id} image={product.image} name={product.name} price={product.price} />
                            </li>
                            )
                        }
                    )}
                </ul>

                <h2>TOTAL: S/{totalPrice}</h2>

                <RoundButton text='HACER PEDIDO' type='full' onClick={onClickMakeOrder}/>
            </div>
        </HomeAside>
    );
}

export { ShoppingCartList };