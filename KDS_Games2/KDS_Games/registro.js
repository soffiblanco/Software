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

function validarContraseña(contraseña){
   
    // Verificar si la contraseña tiene al menos 6 caracteres
   if (contraseña.length < 6) {
    return false;
}
   
    var expresionRegular= /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[a-zA-Z0-9]).{6,}$/;
    return expresionRegular.test(contraseña);
}

registro.addEventListener('click', (e)=>{
    var email = document.getElementById('emailreg').value;
    var password = document.getElementById('passwordreg').value;

  

    createUserWithEmailAndPassword(auth, email, password).then(cred =>{
        showSuccessMessage("Usuario creado");
        sendEmailVerification(auth.currentUser).then(()=>{
            showSuccessMessage('Se ha enviado un correo de verificación');
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

        if(!validarContraseña(password)){
            if (password.length < 6) {
                showErrorMessage('La contraseña debe tener al menos 6 caracteres');
            } else {
                showErrorMessage('La contraseña no cumple con los requisitos');
            }
            return;
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