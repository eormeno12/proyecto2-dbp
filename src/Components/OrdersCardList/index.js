import './OrdersCardList.css';

function OrdersCardList({ children }){
    return(
        <div className="orders-container">
            <span className='order-span'>PEDIDOS</span>
            <ul className="orders-list">
                {children}
            </ul>
        </div>
    );
}

export { OrdersCardList };