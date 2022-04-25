let red = 0;
let blue = 0;
let green = 0; 

let dvMain = document.getElementById('maindiv');
let displayDiv = document.getElementById('displayDiv');

dvMain.style.height ='200px';
dvMain.style.width ='200px';

changeColor();
function changeColor(){

    let color = "RGB(" +red + "," + green + "," + blue + ")"; 

    dvMain.style.backgroundColor = color;

    displayDiv.innerHTML = color;


}

function changeRed(){

    red += Number(event.target.getAttribute("data-num"));
    changeColor();
}
function changeBlue(){
    blue += Number(event.target.getAttribute("data-num"));
    changeColor();
}
function changeGreen(){
    green += Number(event.target.getAttribute("data-num"));
    changeColor();
}