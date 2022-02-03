//Adam Wright 
//1-27-2022
//N220


//global variables for x and y position of ball
let x;
let y;
//global variables to control the movement of the ball
let xspeed;
let yspeed;

function setup(){
  
  createCanvas(800,600);
  //sets the starting point for the ball
  x=400;
  y=300;
  //sets the speed of the ball
  xspeed =7;
  yspeed =7;
  //adjusted the frame rate to make it smoother
  frameRate(24);
}

function draw(){
  background(0);

//made the color
  fill(0,250,250);
  //created an interactive ellipse
  ellipse(x,y,80,60);
  //moves the ball along x coordinates
  x = x+ xspeed;
  //moves the ball along y coordinates
  y= y+yspeed;
  //creates the bounce or limiting effect, also changes direction by multiplying by -1
  if (x + 30 >= width || x - 30 <= 0){
    xspeed = xspeed *-1;
    
  }
   if (y + 30 >= height || y - 30 <= 0){
    yspeed = yspeed *-1;
    
  }
  
}
 
