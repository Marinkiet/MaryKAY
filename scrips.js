const burgur = document.getElementById('burger');
const navbar = document.getElementById('nav-bar');


if(burgur){
    burgur.addEventListener('click',()=>{
        navbar.classList.add('active');
    })
}