import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';

import {sendEmailVerification, getAuth, signInWithPopup, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword,  
    onAuthStateChanged, sendPasswordResetEmail} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';

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

window.auth = auth;

// Cerrar sesión si hay un usuario autenticado al cargar la página
if (auth.currentUser) {
    auth.signOut().then(() => {
        console.log('Sesión cerrada al cargar la página');
    }).catch((error) => {
        console.error('Error al cerrar sesión al cargar la página:', error);
    });
}

const loginBtn = document.getElementById('login');
const cerrarBtn = document.getElementById('cerrar');

loginBtn.addEventListener('click', (e)=>{
    e.preventDefault();
   
    var email = document.getElementById('emaillog').value;
    var password = document.getElementById('passwordlog').value;

             // Verificar si ya hay un usuario autenticado antes de intentar iniciar sesión
             if(auth.currentUser) {
                showErrorMessage("Ya hay una sesion iniciada");
                return; // Detener la ejecución
            }

    signInWithEmailAndPassword(auth, email, password).then(cred =>{
        showSuccessMessage ("Usuario logueado Prueba");
           
        if(auth.currentUser.emailVerified){
            window.open('Home.html');
        } else{
            auth.signOut();
        }


    }).catch(error => {
        console.log('Código de error: ', error.code);
        const errorCode = error.code;

 

        // Validación adicional para la contraseña incorrecta
        if (error.code === 'auth/wrong-password') {
            console.log('Contrasena incorrecta reconocida');
            showErrorMessage('Contraseña incorrecta');
            return; // Detener la ejecución si la contraseña es incorrecta
        }

        switch(errorCode){
            case 'auth/invalid-email':
                showErrorMessage('El correo no es válido');
                break;
            case 'auth/user-disabled':
                showErrorMessage('El usuario ha sido deshabilitado');
                break;
            case 'auth/user-not-found':
                showErrorMessage('El usuario no existe');
            case 'auth/invalid-login-credentials':
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


//forgot password
document.getElementById('ForgotPassword').addEventListener('click', (e) => {
    e.preventDefault(); // Esto evita que el enlace redireccione a otra página

    var email = prompt("Por favor ingrese su correo electrónico:");

    if (email) {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log("Correo electrónico para restablecimiento de contraseña enviado");
                showSuccessMessage("Se ha enviado un correo electrónico para restablecer la contraseña a " + email);
            })
            .catch((error) => {
                console.error("Error al enviar el correo electrónico de restablecimiento de contraseña");
                showErrorMessage("Error al enviar el correo electrónico para restablecer la contraseña: " + error.message);
            });
    }
});


document.getElementById("Regresar").addEventListener("click", function(){
    window.location.href = "Home.html";
})

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

// Función para mostrar el texto de sesión iniciada y ocultar el enlace de login
function mostrarTextoSesionIniciada() {
    loginLink.style.display = "none"; // Oculta el enlace de login
    loggedInText.style.display = "inline"; // Muestra el texto de sesión iniciada
}