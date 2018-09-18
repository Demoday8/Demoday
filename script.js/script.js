let backTop = document.querySelector('#span-btn');
let btnHeader = document.querySelector('#btn-header');

backTop.onclick = function() {
    window.scroll({ 

        top: 0,
        behavior: "smooth"
    })
};