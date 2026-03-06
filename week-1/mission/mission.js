let content = document.querySelector("body");
let selectElem = document.getElementById('page_mode');
let newlogo = document.querySelector('logo');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        content.style.backgroundColor = "black";
        content.style.color = "white";
        newlogo.src= "byui-logo-white.png"
        newlogo.style.width = "10%";
    } else {
        // code for changes to colors and logo
        content.style.backgroundColor = "white";
        content.style.color = "black";
        newlogo.src= "byui-logo-blue.webp";
        newlogo.style.width = "10%";

    }
}           
                    