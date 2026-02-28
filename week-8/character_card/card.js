/* Creates Card Character */
const character = {
    name: "Cuzzipoozy",
    level: 10,
    skills: ["Melee","Magic: Force Fields","Swimming"],
    health: 10,
    attacked: function(){
        if(this.health > 0){
            this.health -= 1;
                
        }
    },
    levelUp: function(){
        if(this.health >= 15 && this.health % 5 === 0){
            this.level ++;
        }
    },
    moreHealth: function(){
        this.health++;
    }
};
console.log(character.name);

/*Elements*/
const statsDiv = document.querySelector(".stats");
const nameDiv = document.querySelector(".character_name");
let levelUpBtn = document.getElementById("level_up");
let attackedBtn = document.getElementById("attacked");
let moreBtn = document.getElementById("more_health");
const deadMessage = document.getElementById("diedMessage");

/* Event Listener for the attacked button*/
attackedBtn.addEventListener("click", function(){
   character.attacked();[]
   addInfo();
});

/* Event Listener for the level up button*/
levelUpBtn.addEventListener("click",function(){
    character.levelUp();
    addInfo();
});

moreBtn.addEventListener("click",function(){
    character.moreHealth();
    addInfo();
});


/*Makes the content appear on the screen */
function addInfo(){
   statsDiv.innerHTML = `
    <p>Level: ${character.level}</p>
    <p>Health: ${character.health} </p>
    <p>Skills: ${character.skills.join(", ")} </p>
   `;

   if(character.health === 0){
    deadMessage.hidden = false;
    character.health = 10;

   }
}
function addName(){
    nameDiv.innerHTML = `
    <h3 class = "name">${character.name} </h3>
   `;
}
addName();
addInfo();

/* 
1) Create new object ^
2) Create properties for the object ^
3) Create methods for the object
4) Methods have to add or subtract points to the function when the button is clicked
5) Add new info to the page
    - Get content
    - Set content
6) When character dies have the Dead statement pop up  
7) Bonus: When the character clicks one of the skills they should get a certain amount of points added

*/ 