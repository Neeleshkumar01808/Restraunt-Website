let btn = document.querySelector("#btn",);
let body = document.querySelector("body");
let currMode = "light"; // light or dark

btn.addEventListener('click', () => {
    if(currMode == 'light'){
        currMode="dark";
        setDarkTheme();
        } else {
            currMode='light';
            setLightTheme();
        }  
}); 
function setLightTheme(){
    body.style.backgroundColor="white";
    body.style.color="black";
}

function setDarkTheme() { 
    body.style.backgroundColor="black";
    body.style.color="white";
}
    