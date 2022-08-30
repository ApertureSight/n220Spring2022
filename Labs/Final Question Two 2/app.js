

function reduce(){
    let reduction = document.getElementById('reduced').innerHTML; 
    let value = Number(reduction);
    console.log(value);

    reducedAmt = value - (value * .1);

    console.log(reducedAmt);
    
    document.getElementById('reduced').innerHTML = reducedAmt;




}
//Professor, thank you for the great semester. I hope you have a good summer!