import { LineDivider } from "../LineDivider";
import './LineDividerWText.css';

function LineDividerWText({text}){
    return (
        <div className="line-divider-text-container">
            <LineDivider/>
            <span className="line-divider-text">{text}</span>
            <LineDivider/>
        </div>
    );    
}

export { LineDividerWText };