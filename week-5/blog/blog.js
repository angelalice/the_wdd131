const span = document.querySelectorAll('article.book_descriptors p span');

span.forEach( (element)=>{
    const rating = element.innerText.length;
    element.setAttribute('aria-label', `${rating} out 5 stars`);
    console.log(element);
})