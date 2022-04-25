function avgScore(){
var scoreVar = userNum.value;

let scoreArray = scoreVar.split(",");


let sum = 0;

for(let i = 0; i < scoreArray.length; i++ )
{
    sum += Number(scoreArray[i]);
}

console.log(sum);
average = sum / scoreArray.length;

document.getElementById("result").innerHTML = "Result: " + average;

}