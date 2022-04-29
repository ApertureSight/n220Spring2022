let ship;
let aliens = [];
let lasers = [];
let points = 0;


function preload(){
  alien1a = loadImage('img/alien1a.png');
  alien1b = loadImage('img/alien1b.png');
  alien2a = loadImage('img/alien2a.png');
  alien2b = loadImage('img/alien2b.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  imageMode(CENTER); 
  ship = new Ship();
  let startX = 80;
  let startY = 80;
  
  //bottom row of aliens
  for(var i = 0; i < 10; i++)
    {
      aliens[i] = new Alien(i * startX + 80, startY, alien1a, alien1b, 5)
    }
  
  //top row
  startY = 40;
  let offset = 0;
//second row creation
  for(var j = 10; j < 20; j++)
    {
      aliens[j] = new Alien(offset * startX + 80, startY, alien2a, alien2b, 10)
      offset ++;
      
    }
//third row

  startY = 120;
  let offset1 = 0;
  for(var l = 20; l < 30; l++)
  {
    aliens[l] = new Alien(offset1 * startX + 80, startY, alien1a, alien1b, 10)
    offset1 ++;
    
  }
//4th row

  startY = 160;
  let offset2 = 0;
  for(var m = 30; m < 40; m++)
  {
    aliens[m] = new Alien(offset2 * startX + 80, startY, alien1a, alien1b, 10)
    offset2 ++;
    
  }

  console.log(aliens);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(50);
  ship.show();
  ship.move();
  //draws and moves the aliens
  var edge = false;
  for(var i = 0; i < aliens.length; i++){
    aliens[i].show();
    aliens[i].move();
    if(aliens[i].x > width || aliens[i].x < 0){
      edge = true;
    }
  
    }
    if(edge === true){
      for(var k = 0; k < aliens.length; k++){
        aliens[k].shiftDown();
      }
  }
  //display laser/ move laser
  for (var las = 0; las < lasers.length; las++){
    lasers[las].show();
    lasers[las].move();
    //collision
    for(var j = 0; j < aliens.length; j++){
      if(lasers[las].hits(aliens[j])){
        lasers[las].remove();
        points = points + aliens[j].pts;
        aliens.splice(j, 1);
      }//alien loop
    }//for loop lasers
  }//laser loop

  for(var z = lasers.length -1; z >= 0; z--)//loops through backwards
  {
    if (lasers[z].toDelete){
      lasers.splice(z, 1);//gets rid of laser effect
    }
  }
  //add points
  updateHUD();
  //game over
  if (aliens.length <= 0){
    gameOver();
  }


  
}// end of draw function
//key events
function keyPressed(){
  if (key === ' '){
    var laser = new Laser(ship.x + (ship.width / 2), ship.y);
    lasers.push(laser);
  }
  if(keyIsDown(RIGHT_ARROW)){
    ship.setDir(3);
  }
 else if(keyIsDown(LEFT_ARROW)){
    ship.setDir(-3);
  }
  
}
//stops ship when key released
function keyReleased(){
  ship.setDir(0);
}

function updateHUD(){
  fill(255);
  text("Score: " + points, 10, 20);
  text("Aliens Remaining " + aliens.length, 70,20);
}
function gameOver(){
  background(0);
  textSize(90);
  textAlign(CENTER);
  text("GAME OVER", width / 2, height / 2);
  textSize(30);
  textAlign(CENTER);
  text("Score :" + points, width /2, height /2 + 40);
  textSize(30);
  textAlign(CENTER);
  text("Press 'Ctrl + R' to play again.", width /2, height /2 + 80);
  noLoop(); 

}
