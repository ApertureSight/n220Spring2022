var rectangle =
{ 
//creates x and y location of object
x: 200,
y: 200,
  
  //creates length and width of rectanlge object
lenght: 200,
height: 100,
};
  
  function setup(){
    
    //defines canvas and sets background color of entire canvas
    createCanvas(800,800);
    background(255,50,255);
    
    
  }
  
  function draw(){
    fill(160,220, 18);
    //draws a rectangle using the values passed from the object
   rect(rectangle.x, rectangle.y, rectangle.lenght, rectangle.height);
    
  }