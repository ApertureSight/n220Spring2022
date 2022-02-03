
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  alienHead(100,25);
  alienHead(-100,25);
  alienHead(0, 25);
  
  
}
  function alienHead(x,y){
    
    push();
    translate(x,y);
//face
  fill(255,255,255);
  circle(200, 200, 100);
//eye color  
  fill(0,0,0);
  circle(200, 180, 10);
  circle(180, 185, 10);
  circle(220, 185, 10);
//smile
    fill(255,255,255);
  arc(200, 200, 70,70, QUARTER_PI, PI);
    
    pop();
  }
