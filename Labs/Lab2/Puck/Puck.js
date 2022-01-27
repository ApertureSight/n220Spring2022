//Adam Wright
//1/27/22






function setup(){
    createCanvas(400,300);
  }
  
  var d = 20;
  
  function draw(){
    
    if(mouseX > 200)
      {
        fill("red");
        circle(mouseX, mouseY, d);
      }
    else
      {
        fill("blue");
        circle(mouseX,mouseY,d);
      }
  }