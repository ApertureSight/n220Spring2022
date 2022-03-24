
let txtPreTip = document.getElementById("preTip");
let tipDiv = document.getElementById('tip'); 
let totalDiv = document.getElementById('total');

 
function calculateGratuity(){
    
    let preTip = Number(txtPreTip.value);
    let tip = .20; 

    let tipTotal = Math.round(tip * preTip);
    let final = tipTotal + preTip;
    tipDiv.innerHTML == 'Tip: ',  tipTotal;
    totalDiv.innerHTML == 'Total: ', final;
//     console.log(tipTotal);
// console.log(final);
// console.log(preTip);

}
