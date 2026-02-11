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

//Adds fruits to screen
let html = "";
words.forEach((word) =>{
     html += `<li> ${word}</li>`
     console.log(word);
});


document.querySelector("ul#favorite_fruits").innerHTML = html;

let replace = "";
//Adds student names to the screen
students.forEach( (name) =>{
    replace += `<li> ${ name.first} ${name.last} </li>`
    console.log(name);
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
   console.log(show);
})
document.querySelector("ul#top_students").innerHTML = show;



