


function countTwenties(numberArray){
  var count = 0;
 
  for (var i = 0; i < numberArray.length; i++){
  
  if(numberArray[i] > 20){
    var count = count +1; 
  }

  console.log(count);
  }

  countTwenties([2,3,4,70,27,18,44]);
}


    


  