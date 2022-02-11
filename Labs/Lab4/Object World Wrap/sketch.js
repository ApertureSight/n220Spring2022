var circles ={
  x : 0,
  radius : 25, 
  
}
function setup() {
  //creating a 800x600 canvas
  createCanvas(800,600);
  //assigning 0 as x coordinate of the circle
 
  //using red as fill color
  fill(255,0,0);
}


function draw() {
  //using a gray-ish background
  background(200);
  //drawing a circle at x=circleX, y=height/2 (middle) and with diameter=radius*2
  circle(circles.x, height/2, circles.radius*2);
  //adding 5 to the x value 
  
  circles.x=(circles.x+3)%width;
}

