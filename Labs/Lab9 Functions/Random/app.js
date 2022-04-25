function random(){
    return Math.floor(Math.random() * 10) + 1;

 }

 function totalPackage(){

    var number = random();
    document.getElementById('result').innerHTML = ('Result: ' + number);


    
 }