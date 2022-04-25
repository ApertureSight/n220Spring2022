


function sevenDiv(){
    let guess = document.getElementById('userGuess');
    let userGuess = Number(guess.value);
    
    let result = document.getElementById('result');
    if (guess.value % 7 == 0){
        result.innerHTML = 'Result: True';
    }
    else if(guess.value % 7 != 0){
        result.innerHTML = 'Result: False';
    }
    console.log(guess.value);
}
