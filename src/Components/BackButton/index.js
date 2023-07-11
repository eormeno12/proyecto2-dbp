import { useNavigate } from "react-router-dom";
import { Icons } from "../../Icons";

function BackButton({to}){
    const navigate = useNavigate();

    return (
        <Icons onClick={() => navigate(to ? to : -1)} type="back" iconType='back' color="var(--main-color)" size="40px"/>
    );
}

export { BackButton };