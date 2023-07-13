import { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { HomeContext } from '../../Context/HomeContext';
import { SignInForm } from '../../Components/SignInForm';


import './SignIn.css';

function SignIn() {  
  const { signInUserId } = useContext(HomeContext);
  if(signInUserId !== "") return <Navigate to='/'/>

  return (
    <>
      <div className="sign-in-container">
        <h1>¡BIENVENIDO DE NUEVO!</h1>
        <SignInForm />
      </div>
    </>
  )
}

export { SignIn }; 
