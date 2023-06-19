import './RoundButton.css'

function RoundButton({text, onClick, type}){
    return (
        <button 
        className={`roundButton roundButton--${type}`}
        onClick={onClick}
        >{text}</button>
    );
}

export { RoundButton };