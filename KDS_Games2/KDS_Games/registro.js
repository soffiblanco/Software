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

const showRegistroBtn = document.getElementById('showRegistroForm');
const registroScreen = document.getElementById('registro-screen');

showRegistroBtn.addEventListener('click', () => {
    registroScreen.style.display = 'block';
});



const handleRegistro = (e)=>{
    e.preventDefault();
    var email = document.getElementById('emailreg').value;
    var password = document.getElementById('passwordreg').value;

    createUserWithEmailAndPassword(auth, email, password).then(cred =>{
        alert ("Usuario creado");
        sendEmailVerification(auth.currentUser).then(()=>{
            alert('Se ha enviado un correo de verificación');
        });
    }).catch(error => {
        const errorCode = error.code;

        if(errorCode == 'auth/email.already-in-use')
        alert('El correo ya está en uso');
        else if(errorCode == 'auth/invalid-email')
        alert('El correo no es válido');
        else if(errorCode == 'auth/weak-password')
        alert('La contraseña debe tener al menos 6 caracteres');
    }); 
};




const registroBtn = document.getElementById('registro');
registroBtn.addEventListener('click', handleRegistro);