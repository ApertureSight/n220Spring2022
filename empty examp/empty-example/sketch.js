//function setup() {
  createCanvas(480 , 120)
}

//function draw() {
  background(211);
  point(240, 60);
  point(479, 119);
  point(1, 1);
  point(1, 119);
  point(479, 1);
 // creates a diagonal line from bottom left to top right, passing through the middle
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

 
function setup2() {
  createCanvas(720, 480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw2() {
  background(204);

  // Neck
  stroke(102);                // Set stroke to gray
  line(266, 257, 266, 162);   // Left
  line(276, 257, 276, 162);   // Middle
  line(286, 257, 286, 162);   // Right
  //antennae
  line(276, 155, 246, 112);   // Small
  line(276, 155, 306, 56);    // Tall
  line(276, 155, 342, 170);   // Medium

  // Body
  noStroke();                 // Disable stroke
  fill(102);                  // Set fill to gray
  ellipse(264, 377, 33, 33);  // Antigravity orb
  fill(0);                    // Set fill to black
  rect(219, 257, 90, 120);    // Main body
  fill(102);                  // Set fill to gray
  rect(219, 274, 90, 6);      // Gray stripe

  // Head
  fill(0);                    // Set fill to black
  ellipse(276, 155, 45, 45);  // Head
  fill(255);                  // Set fill to white
  ellipse(288, 150, 14, 14);  // Large eye
  fill(0);                    // Set fill to black
  ellipse(288, 150, 3, 3);    // Pupil
  fill(153);                  // Set fill to light gray
  ellipse(263, 148, 5, 5);    // Small eye 1
  ellipse(296, 130, 4, 4);    // Small eye 2
  ellipse(305, 162, 3, 3);    // Small eye 3

} 