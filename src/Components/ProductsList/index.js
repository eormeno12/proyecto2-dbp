import './ProductsList.css';

function ProductsList({children}){
    return (
        <ul className="products-list">
            {children}
        </ul>
    );
}

export {ProductsList}