const body = document.querySelector('body');
const l1 = document.querySelector('footer')

function pintarDeVerde(){
    if(scrollY  === body.scrollHeight - innerHeight){
        l1.style.display = 'none';
    }
    else{
        body.style.backgroundColor = '';
        l1.style.display = 'flex';
    }
}

body.onscroll = pintarDeVerde;