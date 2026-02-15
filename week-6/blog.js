/*const span = document.querySelectorAll('article.book_descriptors p span');

span.forEach( (element)=>{
    const rating = element.innerText.length;
    element.setAttribute('aria-label', `${rating} out 5 stars`);
    console.log(element);
})


const book_info = [
	{
		id: 1,
		date: 'July 5, 2022',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		date: 'December 12, 2021',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		date: "Feb 12, 2022",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
];

const book = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
	}
];

const book_info_list = document.querySelector(".book_descriptors");

book_info.forEach(element => {
	console.log(element);
	const info = document.createElement('div');
	info.classList.add("element");

	info.id = `element-${element.id}`;
	info.innerHTML = `
		<p class ="date"><em>${element.date}</em></p>
        <p class="chapters"> ${element.ages} </p>
        <p class="genre">${element.genre}</p>
        <p class= "rating"> <span aria-label = "${element.stars.length} out of 5 stars"> ${element.stars}</span></p>
	`
	book_info_list.appendChild(info);
})

const bookList = document.querySelector(".book");

book.forEach(item =>{
	console.log(item);
	const section = document.createElement('section');
	section.classList.add('item');

	section.id = `book-${item.id}`;
	section.innerHTML = `
		<h2>${item.title}</h2>
        <img src=${item.imgSrc} alt =${item.imgAlt}>
        <p>${item.description}</p>
	`
	bookList.appendChild(section);
})

*/               


const books = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
];
                

           
const book_info_list = document.getElementById("main-content");

books.forEach( (book) => {
	console.log(book);
	const section = document.createElement('section');
	section.classList.add("book-grid");

	section.innerHTML = `
		<hr class ="design">

		<div id= "book_info"> 
			<article class="book_descriptors" >
				<p class ="date"><em>${book.date}</em></p>
				<p class="chapters"> ${book.ages} </p>
				<p class="genre">${book.genre}</p>
				<p class= "rating"> <span aria-label = "${book.stars.length} out of 5 stars"> ${book.stars}</span></p>
        	</article>
		</div>

		<div id= "displayed_book">
			<article class ="book_displayed">
				<h2> ${book.title}</h2>
				<img src="${book.imgSrc}" alt ="${book.imgAlt}">
				<p>${book.description}</p>
    	</article>
		</div>
	`;
	book_info_list.appendChild(section);
})
                

