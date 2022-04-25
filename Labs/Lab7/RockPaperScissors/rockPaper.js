const computerChoiceDisplay = document.getElementById("computer-choice")
const playerChoiceDisplay = document.getElementById("player-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice 
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => { 
 
    userChoice = e.target.id  
 playerChoiceDisplay.innerHTML = userChoice
 generateComputerChoice()
 printResult()

}))



function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()  * possibleChoices.length) + 1
    
    if (randomNumber === 1) {
        computerChoice = 'Rock'
    }
    if(randomNumber === 2) {
        computerChoice = 'Paper'
    }
    if(randomNumber === 3) {
        computerChoice = 'Scissors'
    }
    if(randomNumber === 4) {
        computerChoice = 'Guard'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
function printResult(){
    if(computerChoice ==  userChoice){
    resultDisplay.innerHTML = "Draw"
    }
    else if(computerChoice == 'Rock' && userChoice == 'Paper'){
        resultDisplay.innerHTML = 'User Wins'
    }
    else if(computerChoice == 'Paper' && userChoice == 'Scissors'){
        resultDisplay.innerHTML = 'User Wins'
    }
    else if(computerChoice == 'Scissors' && userChoice == 'Rock'){
        resultDisplay.innerHTML = "User Wins"
    }
    else if(computerChoice == 'Rock' && userChoice == 'Scissors'){
        resultDisplay.innerHTML = 'Rock Smashes Scissors'
    }
    else if(computerChoice == 'Guard' || userChoice == 'Guard'){
            resultDisplay.innerHTML = 'Blocked!'
    }
         
}
