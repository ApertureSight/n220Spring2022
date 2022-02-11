// create tv

let tv = {
    frameSize: 400,
    framePosition: 100,
    screenSize: 350,
    screenPosition: 100, 
    frameColor: 'black', 
    screenColor: 'grey', 
}

function setup(){
    createCanvas(1200,1200);

}

function draw(){

}

if (mouseIsPressed == true){
    tv.screenColor = 'grey';
}
    else
    {
        tv.screenColor = 'blue';
    }

function tv(x,y){

    this.xpos = x;
    this.ypos = y;
   //tv framme
   rect(x, y, 400, 300, 50);
   //tv screen
   rect(x, y, 350, )
}