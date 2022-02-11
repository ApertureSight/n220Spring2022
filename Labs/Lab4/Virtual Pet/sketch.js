
//creates the pet object
var pet = {
  x: 200,
  y: 200, 
  size: 45,
  offsetX: 10,
};
//draws the canvas
function setup() {
  createCanvas(400, 400);
  background(20,25,18);
}

function draw() {

  background(220);
  
  //if statement for offset functionality. it doesn't throw me any errors, but i can't seem to stop it from running off the leash..
  if(mouseIsPressed && pet.offsetX >= 1)
    {
      pet.offsetX = pet.offsetX - 5; 
    }
  else(!mouseIsPressed)
  {  
      pet.offsetX = pet.offsetX +1;  
  }
  //draws the circle using the mouseX and mouseY positions and calls the size of the pet object
  
  circle(mouseX+ pet.offsetX,mouseY,pet.size);
}