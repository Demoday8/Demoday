let menu = document.querySelector('.hamburguer');
let items = document.querySelector('.invisivel');
let xis1 = document.querySelector('.barra1'); 
let xis2 = document.querySelector('.barra2'); 
let xis3 = document.querySelector('.barra3');


menu.onclick = function(){
    items.classList.toggle('mostrando');
    xis1.classList.toggle('barrinha2');
    xis2.classList.toggle('barrinha2');
    xis3.classList.toggle('barrinha2');
}