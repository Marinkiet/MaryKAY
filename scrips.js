const burgur = document.getElementById('burger');
const close = document.getElementById('close');
const navbar = document.getElementById('nav-bar');


if(burgur){
    burgur.addEventListener('click',()=>{
        navbar.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        navbar.classList.remove('active');
    })
}