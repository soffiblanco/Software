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

login.addEventListener('click', (e)=>{
    var email = document.getElementById('emaillog').value;
    var password = document.getElementById('passwordlog').value;

    signInWithEmailAndPassword(auth, email, password).then(cred =>{
        alert ("Usuario logueado");
    }).catch(error => {
        const errorCode = error.code;

        if(errorCode == 'auth/Invalid-email')
        alert('El correo no es válido');
        else if(errorCode == 'auth/user-disabled')
        alert('El usuario ha sido deshabilitado');
        else if(errorCode == 'auth/user-not-found')
        alert('El usuario no existe');
        else if(errorCode == 'auth/wrong-password')
        alert('Contraseña incorrecta');
    });
});

cerrar.addEventListener('click', (e)=>{
    auth.signOut().then(()=>{
        alert('Sesión iniciada');
    }).catch((error)=>{
        alert('Error al cerrar sesión');
    });
})

auth.onAuthStateChanged(user=>{
    if(user){
        console.log("Usuario activo");
        var email = user.emailVerified;
        if(email){
            window.open("https://www.google.com/")
        } else{
            auth.signOut();
        }
    }else{
        console.log("Usuario inactivo");
    }
});