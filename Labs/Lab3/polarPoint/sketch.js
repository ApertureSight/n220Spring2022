
function setup (){
  
  //creates a canvas
  createCanvas(1400,1400);
  
}

function draw(){
  //creates a res variable to call the polarPoint funciton radius to
  res = polarPoint(15);
  //handles the left right x movement/placement, and up/down movement y placement
  translate(100,100);
  //creates our cicrlces in a pattern with a radius of 10
  circle(res.x,res.y, 10);
 //creates a res variable to call the polarPoint funciton radius to
  res2 = polarPoint (25);
   //handles the left right x movement/placement, and up/down movement y placement
  translate(100,100);
  //creates our cicrlces in a pattern with a radius of 10
  circle (res2.x, res2.y,10);
}

function polarPoint(r){
  //assigns the x coordinate to the sin value of mouseX position
  x = r * Math.sin(mouseX);
  //assigns the y coordinate to the cosin value of mouseY position
  y = r * Math.cos(mouseX);
  //returns the vector coordinates
  return createVector(x,y);
}