
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
    // Redirigir al usuario al enlace de Google Drive
    window.location.href = "https://drive.google.com/uc?export=download&id=1Kk6EZ9RaqrQ5_tYnEptKa7xvVr9gqsdF";
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