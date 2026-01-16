
let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');
let imgChange = document.getElementById("logo");

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
        pageContent.style.color= "rgb(231, 41, 73)";
        pageContent.style.fontSize = "3em";
        imgChange.style.width = "20%";
        imgChange.style.opacity = "0.5";
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
        pageContent.style.textShadow = "0 0 10px 10px rgb(19, 82, 17)";
        pageContent.style.color= "rgb(25, 122, 69)";
        imgChange.style.width = "20%";
        imgChange.style.opacity = "0.5";
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
        pageContent.style.transform = "skewX(10deg)";
        pageContent.style.color= "rgb(182, 107, 22)";
        imgChange.style.width = "20%";
        imgChange.style.opacity = "0.2";
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
    }
}
          