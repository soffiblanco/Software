
let text=document.getElementById('text')
let fondoCasasIzquierda = document.getElementById('fondoCasasIzquierda');
let fondoCasasDerecha6 = document.getElementById('fondoCasasDerecha6');

window.addEventListener('scroll',()=>{
    let value=window.scrollY;
    
    text.style.marginTop = value * 2.5 +'px';
    fondoCasasIzquierda.style.left = value * -1.2 + 'px';
    fondoCasasDerecha6.style.left = value * 1.2 + 'px';
    });
    
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