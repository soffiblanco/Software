import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';

import {sendEmailVerification, getAuth, signInWithPopup, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword,  
    onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyCxoa1xglcKDHjyE9liCMknvqvw1blqopY",
  authDomain: "kds-games.firebaseapp.com",
  projectId: "kds-games",
  storageBucket: "kds-games.appspot.com",
  messagingSenderId: "188988426956",
  appId: "1:188988426956:web:bdead3b4c5564a23df1069",
  measurementId: "G-MGFW9Q6KFD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function validarContraseña(contraseña) {
    // Verificar si la contraseña tiene al menos 6 caracteres
    var longitudSuficiente = contraseña.length >= 6;

    // Verificar si la contraseña contiene al menos un carácter especial
    var contieneCaracterEspecial = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/.test(contraseña);

    return {
        longitudSuficiente: longitudSuficiente,
        contieneCaracterEspecial: contieneCaracterEspecial
    };
}

registro.addEventListener('click', (e)=>{
    var email = document.getElementById('emailreg').value;
    var password = document.getElementById('passwordreg').value;

 // Verificar si la contraseña cumple con los requisitos de la expresión regular
 var validacionContraseña = validarContraseña(password);

 if (!validacionContraseña.longitudSuficiente && !validacionContraseña.contieneCaracterEspecial) {
     showErrorMessage('La contraseña debe tener al menos 6 caracteres y contener al menos un carácter especial');
     return; // Salir de la función si la contraseña no cumple con los requisitos
 } else if (!validacionContraseña.longitudSuficiente) {
     showErrorMessage('La contraseña debe tener al menos 6 caracteres');
     return; // Salir de la función si la contraseña no cumple con los requisitos de longitud
 } else if (!validacionContraseña.contieneCaracterEspecial) {
     showErrorMessage('La contraseña debe contener al menos un carácter especial');
     return; // Salir de la función si la contraseña no cumple con los requisitos de caracteres especiales
 }


    createUserWithEmailAndPassword(auth, email, password).then(cred =>{
        showSuccessMessage("Usuario creado");
        sendEmailVerification(auth.currentUser).then(()=>{
            showSuccessMessage('Se ha enviado un correo de verificación');
            window.location.href = "Login.html";
        });
    }).catch(error => {
        console.error('Error code: ', error.code);
        const errorCode = error.code;

        switch(errorCode){
            case 'auth/email-already-in-use':
                showErrorMessage('El correo ya está en uso');
                break;
            case 'auth/invalid-email':
                showErrorMessage('El correo no es válido');
                break;
            default:
                showErrorMessage('Hubo un error');
                break;
        }
    })
})

document.getElementById("Regresar").addEventListener("click", function(){
    window.location.href = "Home.html";
})

function showSuccessMessage(message) {
    const successMessage = document.createElement('div');
    successMessage.textContent = message;
    successMessage.classList.add('success-message');
    document.body.appendChild(successMessage);
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
}

function showErrorMessage(message) {
    const errorMessage = document.createElement('div');
    errorMessage.textContent = message;
    errorMessage.classList.add('error-message');
    document.body.appendChild(errorMessage);
    setTimeout(() => {
        errorMessage.remove();
    }, 3000);
}