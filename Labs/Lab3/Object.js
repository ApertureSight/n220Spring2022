
var startX = 370;
var startY = 250;
var finalX = 370;
var finalY = 175;
var step = .005;
var pct = 0.0;

function draw() {
    background(0);
    if (pct < 1.0) {
      x = startX + ((stopX-startX) * pct);
      y = startY + ((stopY-startX) * pct);
      pct += step;
    }
    circle(x, y, 70);
  
  
function draw()

    stroke(0);
    //moon color
    fill(191, 191, 189);
stroke(0,0,0);
//moons overlapping
circle(390,130,100);

}

function moon(x,y){
    push();
    translate(x,y);
    stroke(0);
    fill(191,191,189);
    stroke(0,0,0);
    circle(370,175,70);
}