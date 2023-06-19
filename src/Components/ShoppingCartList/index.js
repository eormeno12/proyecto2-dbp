import { useContext } from "react";
import { HomeAside } from "../HomeAside";
import { HomeContext } from "../../Context/HomeContext";
import { ShoppingCartCard } from "../ShoppingCartCard";
import { RoundButton } from "../RoundButton";
import { useNavigate } from "react-router-dom";

import './ShoppingCartList.css';

function ShoppingCartList(){
    const navigate = useNavigate();
    const {shoppingCartList} = useContext(HomeContext);
    let totalPrice = 0;

    const onClickMakeOrder = () => {navigate('/my-order')}

    return(
        <HomeAside>
            <div id="shopping-cart-list">
                <h1>CARRITO DE COMPRAS</h1>
                <ul className="shopping-cart-list">
                    {shoppingCartList.map(product => 
                        {
                            totalPrice += product.price;
                            return (
                            <li>
                                <ShoppingCartCard key={product.id} id={product.id} image={product.image} name={product.name} price={product.price} />
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