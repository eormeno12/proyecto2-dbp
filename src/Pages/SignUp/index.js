import { BackButton } from "../../Components/BackButton";
import { SignUpUser } from "../../Components/SignUpUser";

import './SignUp.css';

function SignUp(){
    return ( 
    <>
        <BackButton />
        <div className="sign-up-container">
            <h1>¡REGÍSTRATE!</h1>
            <SignUpUser />
        </div>
    </>);
}

export { SignUp };