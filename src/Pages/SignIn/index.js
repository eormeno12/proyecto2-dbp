import { useContext, useState } from 'react';
import { InputField } from '../../Components/InputField';
import { LineDividerWText } from '../../Components/LineDividerWText';
import { RoundButton } from '../../Components/RoundButton';
import { validateEmail, validatePassword, validateIsNotEmpty} from '../../utils/validation';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { signIn } from '../../utils/request';
import { HomeContext } from '../../Context/HomeContext';


import './SignIn.css';

function SignIn() {
  const navigate = useNavigate();

  const {setSignInUserId} = useContext(HomeContext);


  const [user, setUser] = useState({
    'email': {'value': '', 'error': ''},
    'password': {'value': '', 'error': ''},
  });

  const [signInError, setSignInError] = useState('');

  const handleChange = (event, key) => {
    setUser((prev) =>  {
        const data = {...prev}
        const value = event.target.value;

        data[key].value = value;

        if(key === 'email')
            data[key].error = validateEmail(value);
        else if(key === 'password')
            data[key].error = validatePassword(value);

        return data;
    });
};

const onSubmit = (event) => {
    event.preventDefault();

    const data = {...user}
    const dataValues = {}
    let isThereAnError = false;

    for(const key in user){
        dataValues[key] = data[key].value;
        data[key].error = data[key].error || validateIsNotEmpty(data[key].value);

        if(data[key].error) isThereAnError = true;
      }
      
    if(isThereAnError){
        setUser(data);
        return;
    }else{
        signIn(dataValues)
        .then(response => {
          console.log(response)
            if(response.status === 'SUCCESS') {
              setSignInUserId(response.content);
              navigate('/');
            } else setSignInError(response.content);
        })
    }
  }

  return (
    <>
      <div className="sign-in-container">
        <h1>¡BIENVENIDO DE NUEVO!</h1>

        <LineDividerWText text='INICIA SESIÓN CON CORREO' />

        <form className='sign-in-email-form' onSubmit={onSubmit}>
            <InputField
              label='Email' 
              placeholder='Ingrese su correo electrónico' 
              type='text'
              iconType='mail'
              value={user.email.value}
              onChange={(event) => handleChange(event, 'email')}
              error={user.email.error}
            />
            <InputField
              label='Contraseña' 
              placeholder='Ingrese su contraseña' 
              type='password'
              iconType='key'
              value={user.password.value}
              onChange={(event) => handleChange(event, 'password')}
              error={user.password.error}
            />
            <RoundButton text='INICIAR SESIÓN' type='full'/>
        </form>

        <span className="auth-error" style={{display: `${signInError ? 'initial' : 'none'}`}}>{signInError}</span>
        
        <div className='sign-in-new-account-container'>
          <span>¿No tienes una cuenta?</span>
          <NavLink to={'/sign-up'}>
            Regístrate aquí
          </NavLink>
        </div>
      </div>
    </>
  )
}

export { SignIn }; 
