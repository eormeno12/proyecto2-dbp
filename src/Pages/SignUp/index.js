import { Navigate } from "react-router-dom";
import { BackButton } from "../../Components/BackButton";
import { SignUpUser } from "../../Components/SignUpUser";
import { useContext } from "react";
import { HomeContext } from "../../Context/HomeContext";

import './SignUp.css';

function SignUp(){

const {signInUserId } = useContext(HomeContext);
  
  if(signInUserId !== "") return <Navigate to='/'/>
  
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