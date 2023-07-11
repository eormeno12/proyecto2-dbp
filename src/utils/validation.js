function validateEmail(email) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (email.match(validRegex)) {  
      return '';
    } else {
      return 'Ingrese un correo electrónico válido.';
    }
}

function validatePassword(password) {

    var validRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  
    if (password.match(validRegex)) {  
      return '';
    } else {
      return 'Debe contener al menos contener 8 caracteres, 1 mayúscula, 1 minúscula y 1 número.';
    }
}

function validatePhone(phone) {

    var validRegex = /^(?:\+?51)?9\d{8}$/;
  
    if (phone.match(validRegex)) {  
      return '';
    } else {
      return 'Ingrese un número celular válido.';
    }
}

function validateIsNotEmpty(value) {
    if(value != ''){
        return '';
    }else{
        return 'Este campo no puede estar vacío.'
    }
}

export { validateEmail, validatePassword, validatePhone, validateIsNotEmpty};