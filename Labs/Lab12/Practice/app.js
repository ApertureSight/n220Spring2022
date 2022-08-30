let dvSalutation = document.getElementById('salutation');
let newNameTxt = document.getElementById('txtNewName');

let userName = localStorage.getItem("name");

console.log(userName);


function setName(){

    let newName = newNameTxt.value;

    // on load
    let userName = localStorage.getItem("name");
    // store name


    localStorage.setItem("name", newNameTxt);


    dvSalutation.innerHTML = "Enter your name"


}