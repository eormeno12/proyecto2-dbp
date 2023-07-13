import { useState } from "react";
import { InputField } from "../InputField";
import { LineDividerWText } from "../LineDividerWText";
import { RoundButton } from "../RoundButton";
import { validateEmail, validateIsNotEmpty, validatePassword, validatePhone } from "../../utils/validation";
import { Navigate, useNavigate } from "react-router-dom";
import { signUp } from "../../utils/request";

function SignUpUser() {
    const navigate = useNavigate();

    const [newUser, setNewUser] = useState({
        'name': {'value': '', 'error': ''},
        'lastname': {'value': '', 'error': ''},
        'username': {'value': '', 'error': ''},
        'address': {'value': '', 'error': ''},
        'dni': {'value': '', 'error': ''},
        'email': {'value': '', 'error': ''},
        'password': {'value': '', 'error': ''},
    });

    const [signUpError, setSignUpError] = useState('');

    const handleChange = (event, key) => {
        setNewUser((prev) =>  {
            const data = {... prev}
            const value = event.target.value;

            data[key].value = value;

            if(key == 'email'){
                data[key].error = validateEmail(value);
            }else if(key == 'password'){
                data[key].error = validatePassword(value);
            }else if(key == 'phone'){
                    data[key].error = validatePhone(value);
            }else{
                data[key].error = validateIsNotEmpty(value);
            }

            return data;
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const data = {...newUser}
        const dataValues = {}
        let isThereAnError = false;

        for(const key in newUser){
            dataValues[key] = data[key].value;
            data[key].error = data[key].error || validateIsNotEmpty(data[key].value);
            
            if(data[key].error) isThereAnError = true;
        }

        
        if(isThereAnError){
            setNewUser(data);
            return;
        }else{
            signUp(dataValues)
            .then(response => {
                if(response === 'SUCCESS') navigate('/sign-in');
                else setSignUpError(response)
            })
        }
    }

    return (
    <>
        <LineDividerWText text='REGÍSTRATE CON CORREO' />

        <div className='sign-up-form-container'>
            <form className='sign-up-form' onSubmit={onSubmit}>
            <InputField
                    label='DNI' 
                    placeholder='Ingrese su DNI' 
                    type='text'
                    iconType='dni'
                    value={newUser.dni.value}
                    onChange={(event) => handleChange(event, 'dni')}
                    error={newUser.dni.error}
                />

                <InputField
                    label='Nombre' 
                    placeholder='Ingrese su nombre' 
                    type='text'
                    iconType='user'
                    value={newUser.name.value}
                    onChange={(event) => handleChange(event, 'name')}
                    error={newUser.name.error}
                />

                <InputField
                    label='Apellidos' 
                    placeholder='Ingrese sus apellidos' 
                    type='text'
                    iconType='user'
                    value={newUser.lastname.value}
                    onChange={(event) => handleChange(event, 'lastname')}
                    error={newUser.lastname.error}
                />

                <InputField
                    label='Username' 
                    placeholder='Ingrese su nombre de usuario' 
                    type='text'
                    iconType='username'
                    value={newUser.username.value}
                    onChange={(event) => handleChange(event, 'username')}
                    error={newUser.username.error}
                />

                <InputField
                    label='Dirección' 
                    placeholder='Ingrese su dirección' 
                    type='text'
                    iconType='location'
                    value={newUser.address.value}
                    onChange={(event) => handleChange(event, 'address')}
                    error={newUser.address.error}
                />

                <InputField
                    label='Email' 
                    placeholder='Ingrese sus correo electrónico' 
                    type='text'
                    iconType='mail'
                    value={newUser.email.value}
                    onChange={(event) => handleChange(event, 'email')}
                    error={newUser.email.error}
                />

                <InputField
                    label='Contraseña' 
                    placeholder='Ingrese su contraseña' 
                    type='password'
                    iconType='key'
                    value={newUser.password.value}
                    onChange={(event) => handleChange(event, 'password')}
                    error={newUser.password.error}
                />

                <RoundButton text='CREAR CUENTA' type='full'/>
            </form>
            <span className="auth-error" style={{display: `${signUpError ? 'initial' : 'none'}`}}>{signUpError}</span>
        </div>
    </>
    );
}

export { SignUpUser };