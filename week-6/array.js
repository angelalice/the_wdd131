//Functions converts grades into points
function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

// Array of fruits
const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

//Array of student objects
const students = [
    {last: 'Andrus', first: 'Aaron', grade: 'A'},
    {last: 'Masa', first:'Manny', grade: 'B'},
    {last: 'Tanda', first: 'Tony', grade : 'A'},
    {last: 'Lopez', first: 'Ava', grade : 'D'},
    {last: 'Robinson', first: 'Mason', grade : 'C'},
    {last: 'Hudson', first: 'Leo', grade : 'F'}
];

//Creates an array of student objects
const ages = [9, 10, 9, 11, 12, 12];

//Adds fruits to screen
let html = "";
words.forEach((word) =>{
     html += `<li> ${word}</li>`
});


document.querySelector("ul#favorite_fruits").innerHTML = html;

let replace = "";
//Adds student names to the screen
students.forEach( (name) =>{
    replace += `<li> ${ name.first} ${name.last} </li>`
})

document.querySelector("ul#student_names").innerHTML = replace;

//Adds the tops students to the screen
let show = " ";
students.forEach( (student)=>{
   let grade = student.grade;
   let newGrade = convert(grade);
 
    if(newGrade >=4){
        show += `<li> ${student.first} ${student.last} : ${newGrade} points </li>`
    }
})
document.querySelector("ul#top_students").innerHTML = show;

//Displays the oldest kids
const oldest = ages.filter((age)=>{
    return age > 10;
})

const ul = document.getElementById("oldest_students")
for(let i = 0; i <= 0; i++){
    const li = document.createElement('li');
    li.textContent = oldest;
    ul.appendChild(li);
}

// Creates a new array that doubles all the students ages
const doubleAge = ages.map((age)=>{
    return age * 2;
})
console.log("Students Double Age: " + doubleAge);

//Creates a new array that get the total sum of the students ages
const totalAge = ages.reduce((total,age)=>{
    return total + age
})
console.log("Students Total Age: " + totalAge);


