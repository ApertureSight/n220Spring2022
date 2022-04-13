



function winGame(){
let gameArray = document.getElementById('winning').value;

gameCount = gameArray.split(",");
console.log(gameCount);
let count = 0;


for(let i=0; i < gameCount.length; i++){
    if(gameCount[i] == '1'){
        count +=1;
        console.log(count);
    }
 
 else 
 {

    document.getElementById('result').innerHTML = "I lost the game";
     break;
 }
    if(count == 3) 
{
    console.log(count);
    document.getElementById('result').innerHTML = "I won the game";
      break;
}
}
}



