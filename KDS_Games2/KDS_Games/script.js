
let text=document.getElementById('text')
let fondoCasasIzquierda = document.getElementById('fondoCasasIzquierda');
let fondoCasasDerecha6 = document.getElementById('fondoCasasDerecha6');

window.addEventListener('scroll',()=>{
    let value=window.scrollY;
    
    text.style.marginTop = value * 2.5 +'px';
    fondoCasasIzquierda.style.left = value * -1.2 + 'px';
    fondoCasasDerecha6.style.left = value * 1.2 + 'px';
});
    /*
const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink =document.querySelector('.register-link');
const btnPopup =document.querySelector('.btnLogin-popup');
const iconClose =document.querySelector('.icon-close');
registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
    
btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
    
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});

const gifImage = document.getElementById('gifImage');
const staticImage = document.getElementById('staticImage');
    
gifImage.addEventListener('mouseenter', () => {  
    staticImage.style.display = 'block';  
    gifImage.style.display = 'none';    
});
    
staticImage.addEventListener('mouseleave', () => {
  staticImage.style.display = 'none';
  gifImage.style.display = 'block';
});
*/

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