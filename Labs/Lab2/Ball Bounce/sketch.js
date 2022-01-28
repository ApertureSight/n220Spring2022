
let x;
let y;

let xspeed;
let yspeed;

function setup(){
  createCanvas(800,600);
  x=400;
  y=300;
  xspeed =10;
  yspeed =10;
  frameRate(24);
}

function draw(){
  background(0);
  speed(.5);

  fill(0,250,250)
  ellipse(x,y,80,60);
  
  x = x+ xspeed;
  y= y+yspeed;
  
  if (x + 30 >= width || x - 30 <= 0){
    xspeed = xspeed *-1;
    
  }
   if (y + 30 >= height || y - 30 <= 0){
    yspeed = yspeed *-1;
    
  }
  
}
 