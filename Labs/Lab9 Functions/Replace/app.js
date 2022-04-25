

function fixString(){
let input = document.getElementById('badString').toString();

let cleaned = input.replace('#' , '');

document.getElementById('result').innerHTML += cleaned;


}