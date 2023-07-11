import { ReactComponent as ShoppingCartSVG } from './shopping-cart.svg';
import { ReactComponent as SearchSVG } from './search.svg';
import { ReactComponent as PlusSVG } from './plus.svg';
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as XMarkSVG } from './x-mark.svg';
import { ReactComponent as BackSVG } from './back.svg';
import { ReactComponent as MailSVG} from './mail.svg';
import { ReactComponent as KeySVG} from './key.svg';
import { ReactComponent as EyeSVG} from './eye.svg';
import { ReactComponent as EyeSlashSVG} from './eye-slash.svg';
import { ReactComponent as PhoneSVG} from './phone.svg';
import { ReactComponent as UsernameSVG} from './username.svg';
import { ReactComponent as UserSVG} from './user.svg';
import { ReactComponent as DNISVG} from './dni.svg';
import { ReactComponent as LocationSVG} from './location.svg';


import LogoPNG from './logo.png';

import './Icons.css';

const iconTypes = {
    'shopping-cart': (color) => <ShoppingCartSVG className="icon-svg" fill={color}/>,
    'search': (color) => <SearchSVG className="icon-svg" fill={color}/>,
    'plus': (color) => <PlusSVG className="icon-svg" fill={color}/>,
    'check': (color) => <CheckSVG className="icon-svg" fill={color}/>,
    'x-mark': (color) => <XMarkSVG className="icon-svg" fill={color}/>,
    'back': (color) => <BackSVG className="icon-svg" fill={color}/>,
    'logo': () => <img src={LogoPNG} className="icon-png" alt="Logo." />,
    "mail": (color) => <MailSVG className="icon-svg" fill={color}/>,
    "key": (color) => <KeySVG className="icon-svg" fill={color}/>,
    "eye": (color) => <EyeSVG className="icon-svg" fill={color}/>,
    "eye-slash": (color) => <EyeSlashSVG className="icon-svg" fill={color}/>,
    "username": (color) => <UsernameSVG className="icon-svg" fill={color}/>,
    "user": (color) => <UserSVG className="icon-svg" fill={color}/>,
    "phone": (color) => <PhoneSVG className="icon-svg" fill={color}/>,
    "dni": (color) => <DNISVG className="icon-svg" fill={color}/>,
    "location": (color) => <LocationSVG className="icon-svg" fill={color}/>,
}

function Icons({ iconType, color, onClick, type, size='16px', width}){
    return (
        <span onClick={onClick} style={{'width': width ? width : size, 'height': size}} className={`icon-container icon-container--${type}`}>
            {iconTypes[iconType](color)}
        </span>
    );
}

export { Icons };