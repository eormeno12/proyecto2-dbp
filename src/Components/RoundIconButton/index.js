import './RoundIconButton.css';

import { Icons } from '../../Icons';

function RoundIconButton({iconType, onClick, state}){
    return (
        <button className={`round-icon-button ${state && 'round-icon-button--clicked'}`} onClick={onClick}>
            <Icons iconType={iconType} color='var(--main-color)' type='full'/>
        </button>
    );
}

export { RoundIconButton };