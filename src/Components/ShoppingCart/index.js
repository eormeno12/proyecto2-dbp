import { useContext } from "react";
import { HomeContext } from "../../Context/HomeContext";
import { Icons } from "../../Icons";

import './ShoppingCart.css';

function ShoppingCart(){
    const {count, openHomeAside, displayShoppingCartList} = useContext(HomeContext);

    const onShoppingCartClicked = () => {
        openHomeAside();
        displayShoppingCartList();
    }

    return (
        <div className="shopping-cart" onClick={onShoppingCartClicked}>
            <span className="shopping-cart-count">{count}</span>
            <Icons iconType='shopping-cart' color='var(--main-color)' size="24px"/>
        </div>
    );
}

export { ShoppingCart };