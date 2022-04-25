let userNumber = document.getElementById('userGuess');

let min = 1;
let max = 20;


function random(){
   return Math.floor(Math.random() * 20) + 1;
}
function checkGuess(){
       let userNum = Number(userNumber.value);
       let randomNum = Number(random());

        if (userNum == randomNum){
       
            document.getElementById('result').innerHTML += 'You Guessed Correctly!';
        }
        else if( userNum > randomNum){
            document.getElementById('result').innerHTML += 'You guessed too high!';

        }
        else if (userNum < randomNum){
            document.getElementById('result').innerHTML += 'You guessed too low!';
    
        }
        // console.log(isNaN(random));
        // console.log(isNaN(userNum));
    
      }


