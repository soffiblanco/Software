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

const loginBtn = document.getElementById('login');
const cerrarBtn = document.getElementById('cerrar');
const registro = document.getElementById('registro');
const registroForm = document.getElementById('registro-form');

registroForm.style.display = 'none';

registro.addEventListener('click', (e)=>{
    e.preventDefault();
    registroForm.style.display='block';
})

loginBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    var email = document.getElementById('emaillog').value;
    var password = document.getElementById('passwordlog').value;

    signInWithEmailAndPassword(auth, email, password).then(cred =>{
        showSuccessMessage ("Usuario logueado");
        if(auth.currentUser.emailVerified){
            window.open("https://www.google.com/");
        } else{
            auth.signOut();
        }
    }).catch(error => {
        console.log('Código de error: ', error.code);
        const errorCode = error.code;

        switch(error.code){
            case 'auth/invalid-email':
                showErrorMessage('El correo no es válido');
                break;
            case 'auth/user-disabled':
                showErrorMessage('El usuario ha sido deshabilitado');
                break;
            case 'auth/user-not-found':
                showErrorMessage('El usuario no existe');
            case 'auth/wrong-password':
                showErrorMessage('Contraseña incorrecta');
                break;
            case 'auth/weak-password':
                showErrorMessage('La contraseña debe tener al menos 6 caracteres');
                break;
            default:
                showErrorMessage('Se ha producido un error');
                break;
        }
        
    });
});

cerrarBtn.addEventListener('click', (e)=>{
    auth.signOut().then(()=>{
        showSuccessMessage('Sesión cerrada');
    }).catch((error)=>{
        showErrorMessage('Error al cerrar sesión');
    });
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