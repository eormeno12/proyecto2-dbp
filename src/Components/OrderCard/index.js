import { useNavigate } from 'react-router-dom';
import { getLocalISODate } from '../../utils/formatDate';

import './OrderCard.css';

function OrderCard({ id, products, totalPrice, date }){
    const navigate = useNavigate();
    const dateParsed = getLocalISODate(new Date(date));

    const onOrderClick = () => {
        navigate(`/my-orders/${id}`)
    }

    return (
        <div className="order-card" onClick={onOrderClick}>
            <h1>PEDIDO {id}</h1>

            <div className='my-order-info'>
                <span className='order-card-date'>Fecha: {dateParsed} </span>
                <span className='order-card-count'>{products.length} {products.length === 1 ? 'artículo' : 'artículos'}</span>
            </div>

            <h2>TOTAL: S/{totalPrice}</h2>
        </div>
    );
}

export { OrderCard };