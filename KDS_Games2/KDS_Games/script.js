
let text=document.getElementById('text')
let fondoCasasIzquierda = document.getElementById('fondoCasasIzquierda');
let fondoCasasDerecha6 = document.getElementById('fondoCasasDerecha6');

window.addEventListener('scroll',()=>{
    let value=window.scrollY;
     // Limitar el movimiento vertical del texto
     if (value * 2.5 <= 1200) {
        text.style.marginTop = value * 2.5 + 'px';
    } 

    fondoCasasIzquierda.style.left = value * -1.2 + 'px';
    fondoCasasDerecha6.style.left = value * 1.2 + 'px';
  
});


// Antes de usar auth, asegúrate de que la variable exista en el objeto window
if (window.auth) {
    const user = window.auth.currentUser;
    // Resto de tu lógica que utiliza auth...
} else {
    console.error('No se encontró la variable auth en el objeto window.');
}


const gifImage = document.getElementById('gifImage');
const staticImage = document.getElementById('staticImage');
const driveLink = document.getElementById('driveLink');

driveLink.href = "https://drive.google.com/uc?export=download&id=1Kk6EZ9RaqrQ5_tYnEptKa7xvVr9gqsdF";
   
gifImage.addEventListener('mouseenter', () => {  
    staticImage.style.display = 'block';  
    gifImage.style.display = 'none';    
});
    
staticImage.addEventListener('mouseleave', () => {
  staticImage.style.display = 'none';
  gifImage.style.display = 'block';
});

staticImage.addEventListener('click', () => {
    console.log('Se hizo clic')
    // Verificar si hay un usuario autenticado
    const user = auth.currentUser;
    if (user) {
        console.log('hay sesion')
        // Si hay un usuario autenticado, redirigir al enlace de Google Drive después de 2 segundos
        setTimeout(() => {
            window.location.href = "https://drive.google.com/uc?export=download&id=1Kk6EZ9RaqrQ5_tYnEptKa7xvVr9gqsdF";
        }, 4500); // Retraso de 2 segundos

        // Mostrar mensaje de éxito con retraso
        setTimeout(() => {
            showSuccessMessage("Su solicitud fue realizada con éxito, será redirigido al link de descarga.");
        }, 1000); // Retraso de 1 segundo para que aparezca antes de la redirección
    } else {
        console.log('no hay sesion')
        // Si no hay un usuario autenticado, mostrar un mensaje indicando que es necesario iniciar sesión
        showErrorMessage("Debes iniciar sesión para descargar el juego.");
    }
});

function toggleLoginPopup() {
    var loginPopup = document.getElementById('login-popup');
    var loginSection = document.getElementById('login-section');
    var registroSection = document.getElementById('registro-section');

    if (loginPopup.style.display === 'none' || loginPopup.style.display === '') {
        loginPopup.style.display = 'block';
        loginSection.style.display = 'block';
        registroSection.style.display = 'none';
    } else {
        loginPopup.style.display = 'none';
    }
}

function mostrarRegistro() {
    var registroSection = document.getElementById('registro-link');
    var loginSection = document.getElementById('login-link');

    registroSection.style.display = 'block';
    loginSection.style.display = 'none';
}

function mostrarLogin() {
    var registroSection = document.getElementById('registro-link');
    var loginSection = document.getElementById('login-link');

    registroSection.style.display = 'block'; // Mostrar la opción de registro
    loginSection.style.display = 'block';
}

function cerrarVentanaEmergente() {
    var loginPopup = document.getElementById('login-popup');
    loginPopup.style.display = 'none';
}

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