let selectElem = document.getElementById('webdevlist');
        selectElem.addEventListener('change', function(){
        let codeValue = selectElem.value;
        if(codeValue === "html"){
            document.getElementById("topics").childNodes[1].textContent = "Knock knock. Who's there? Dishes. Dishes who? Dishes a great time to tell you a joke!";
            
        }else if(codeValue === "css"){
            document.querySelector("h1").style.fontSize = "2em";
            document.querySelector("h1").style.color = "pink";

        }else if(codeValue === "js"){
            document.getElementsByClassName("list")[0].style.backgroundColor = "yellow";
        }   }) 

function doSomething(){
    console.log('The DOM is fully loaded.');
}

document.addEventListener('DOMContentLoaded', doSomething);