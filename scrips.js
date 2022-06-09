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

//single product
let mainImg = document.getElementById("main-prod-img");
let smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = () =>{
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = () =>{
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = () =>{
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = () =>{
    mainImg.src = smallImg[3].src;
}