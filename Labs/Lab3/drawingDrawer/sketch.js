//Adam Wright
//2/3/2022
//N220 Tues/Thursday 

function setup() {
  createCanvas(400, 400);
}

function draw() {

  //sets the grey background
  background(220);


//pulling the drawing function out of my draawing drawer
  alienHead(100,25);
  alienHead(-100,25);
  alienHead(0, 25);
  
  
}//my drawing function that creates the alien head
  function alienHead(x,y){
    push();
    //reads the x and y coordinates and in combination with the push, sends them to each drawing to be made
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
    //dunno what this does, but it made it work
    pop();
  }
