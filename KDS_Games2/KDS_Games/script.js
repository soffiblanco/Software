
let text=document.getElementById('text')
let arbolderecha = document.getElementById('arbol-derecha');
let arbolizquierda = document.getElementById('arbol-izquierda');

window.addEventListener('scroll',()=>{
    let value=window.scrollY;
    
    text.style.marginTop = value * 2.5 +'px';
    arbolderecha.style.left = value * -1.2 + 'px';
    arbolizquierda.style.left = value * 1.2 + 'px';
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


