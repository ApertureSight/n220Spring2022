let position = { x: 0, y: 0 };

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //creates a grey background
  background(220);
  //sets position of line beginning to mouse position
  if(mouseIsPressed) {
    position.x = mouseX;
    position.y = mouseY;
  
  }
  //determines the distance after mouse pressed
  let zah = distance( position, { x: mouseX, y: mouseY });

  //changes the color of the line to red if longer than 120 pixels

  if(zah > 120) {
    stroke("#FF0000");
  } else (zah < 120){
    stroke("#000000");
  }
  //determines the distance between start and finish
  line(position.x, position.y, mouseX, mouseY);
}
//function to determine distance
function distance(p1, p2) {
  
  let dx = p1.x - p2.x;
  let dy = p1.y - p2.y;
  
  //return the distance
   return Math.sqrt(dx*dx + dy*dy);
}
