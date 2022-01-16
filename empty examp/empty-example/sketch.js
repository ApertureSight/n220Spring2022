function setup() {
  createCanvas(480 , 120)
}

function draw() {
  background(211);
  point(240, 60);
  point(479, 119);
  point(1, 1);
  point(1, 119);
  point(479, 1);
//  creates a diagonal line from bottom left to top right, passing through the middle
  line(1, 119, 479, 1);
//creates a right triangle in the upper right quadrant
  triangle(120, 1, 120, 80, 80, 80);
  //creates a 4 sided shape
  quad(300, 60, 360, 60, 360, 90, 300, 90);
//creates a rectangle
  rect(230, 20, 30, 30);
  //creates an ellipse
  ellipse(30, 30, 30);
  //Creates an arc or incomplete circle
  arc(420, 110, 15, 15, QUARTER_PI, TWO_PI);
  nofill();

//creates 4 different Arc representations 
// background(204);
// arc(90, 60, 80, 80, 0, radians(90));
// arc(190, 60, 80, 80, 0, radians(270));
// arc(290, 60, 80, 80, radians(180), radians(450));
// arc(390, 60, 80, 80, radians(45), radians(225));
//
}
