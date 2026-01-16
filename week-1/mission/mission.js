let content = document.querySelector("body");
let selectElement = document.querySelector("#page_mode");
let newLogo = document.getElementById("logo");

selectElement.addEventListener("change",changeMode);

function changeMode() {
    let curr = selectElement.value;
    if (curr === "dark"){
        content.style.backgroundColor = "black";
        content.style.color = "white";
        newLogo.src = "byui-logo-white.png";
        newLogo.style.width = "10%";
    }else if(curr === "light" || curr == "neutral") {
      content.style.backgroundColor = "white";
      content.style.color = "black";
      newLogo.src = "byui-logo-blue.webp";
      newLogo.style.width = "10%";
    }
}