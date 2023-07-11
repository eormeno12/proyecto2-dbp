import { useState } from "react";
import { Icons } from "../../Icons";
import './InputField.css';

function InputField({label, placeholder, type, iconType, value, onChange, error}) {

    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const onClickPasswordVisibility = () => setPasswordVisibility(prev => !prev);

    return(
        <>
            <label className='input-field-wrapper'>{label}
                    <input 
                        id={label}
                        name={label}
                        type={
                            type == 'password' 
                                ? passwordVisibility 
                                    ? 'text'
                                    : type
                                : type 
                        }
                        className={`input-field ${error ? 'input-field--error' : 'input-field--default'}`}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        maxLength={type == 'tel' ? '9' : ''}
                    />
                    
                    <Icons iconType={iconType} color={`${error ? '#FF0000' : 'var(--main-color)'}`}/>

                    {type == 'password' 
                        ? <Icons 
                            iconType={passwordVisibility ? 'eye-slash' : 'eye'}
                            type={passwordVisibility ? 'eye-slash' : 'eye'}
                            color={`${error ? '#FF0000' : 'var(--main-color)'}`} 
                            onClick={onClickPasswordVisibility}/>
                        : ''
                    }
            </label>
            {
                error 
                ? <span className='input-field-error'>{error}</span>
                : ''
            }
        </>
    );
}

export { InputField }