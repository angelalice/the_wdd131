const nav = document.querySelector('.active');
const showList = document.querySelector('#standby');

showList.addEventListener('click',() =>{
    nav.classList.toggle('active');
});
