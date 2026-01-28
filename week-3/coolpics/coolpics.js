const nav = document.querySelector('.active');
const showList = document.querySelector('#standby');

showList.addEventListener('click',() =>{
    nav.classList.toggle('active');
});

/* 
const btn = document.querySelector('.menu-btn');

btn.addEventlistener('click',function()){
    btn.classList.toggle('.active');

}
 add border: 1px solid;
 (0, 8px)
    transition: transform 0.7s ease-in-out;

*/