d = 1;

//creates canvas
function setup(){
  createCanvas(800,600);
}
//draws black background
function draw(){
  background(0,0,0);
  //creates an ellipse with a varying diameter
  ellipse(400,300,d);
  //increments the diameter value
  d++;
  //loop to check if size of diameter is greater than 200, if it is, it resets it to 1
  if(d > 200){
    d =1;
  }
  
}