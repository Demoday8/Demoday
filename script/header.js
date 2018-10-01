let menu = document.querySelector('.hamburguer');
let items = document.querySelector('.invisivel');
let xis1 = document.querySelector('.barra1'); 
let xis2 = document.querySelector('.barra2'); 
let xis3 = document.querySelector('.barra3');
const body = document.querySelector('body');
const header = document.querySelector('header');


menu.onclick = function(){
    items.classList.toggle('mostrando');
    xis1.classList.toggle('barrinha2');
    xis2.classList.toggle('barrinha2');
    xis3.classList.toggle('barrinha2');
}



function sumirHeader(){
    if(scrollY  === body.scrollHeight - innerHeight){
        header.style.display = 'none';
    }
    else{
        header.style.display = 'flex';
    }
}

body.onscroll = sumirHeader;