const elements = document.querySelectorAll('article.movie p span');
elements.forEach( (e)=>{
    const rating = e.innerText.length;
    e.setAttribute('aria-label', `${rating} out of 5 stars`);
    console.log(e);
}) 