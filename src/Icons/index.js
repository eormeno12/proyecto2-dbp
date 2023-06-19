import { ReactComponent as ShoppingCartSVG } from './shopping-cart.svg';
import { ReactComponent as SearchSVG } from './search.svg';
import { ReactComponent as PlusSVG } from './plus.svg';
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as XMarkSVG } from './x-mark.svg';

import './Icons.css';

const iconTypes = {
    'shopping-cart': (color) => <ShoppingCartSVG className="icon-svg" fill={color}/>,
    'search': (color) => <SearchSVG className="icon-svg" fill={color}/>,
    'plus': (color) => <PlusSVG className="icon-svg" fill={color}/>,
    'check': (color) => <CheckSVG className="icon-svg" fill={color}/>,
    'x-mark': (color) => <XMarkSVG className="icon-svg" fill={color}/>,
}

function Icons({ iconType, color, onClick, type, size='16px'}){
    return (
        <span onClick={onClick} style={{'width': size, 'height': size}} className={`icon-container icon-container--${type}`}>
            {iconTypes[iconType](color)}
        </span>
    );
}

export { Icons };