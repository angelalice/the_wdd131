const nav = document.querySelector('.active');
const showList = document.querySelector('#standby');
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeBtn = modal.querySelector('.close-viewer');

showList.addEventListener('click',() =>{
    nav.classList.toggle('active');
}); 

//Opens the modal when an image is clicked
gallery.addEventListener('click',(e) => {
    if (e.target.tagName == 'IMG'){
        modalImage.src = e.target.src; 
        modal.showModal();
        console.log(modalImage);
    }   
});


//Closes the modal 
closeBtn.addEventListener('click', ()=>{
    modal.close();
})

//Closes modal when area around the image is clicked
modal.addEventListener('click', (e) => {
    if(e.target == modal){
        modal.close();
    }
    
})


