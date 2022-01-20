//Adam Wright
//Tue Jan 18 2022
//N220 TUES/THURS
//array to hold stars as they are created
var stars = [];
function setup(){
    createCanvas(600,600);
    //sets background of whole image to black
    background(0);
    //creates star objects on canvas before other image is drawn.
    for (var i = 0; i < 50; i++) {
        stars.push(new Star());
    }

}

function draw(){
//moon color
    fill(191, 191, 189);
stroke(0,0,0);
//moons overlapping
circle(390,130,100);
circle(370,175,70);
//Central Wing / body
beginShape();
stroke(color(168, 169, 173));
strokeWeight(3);
fill(212, 175, 55);
vertex(70,100);
vertex(70,180);
vertex(270,380);
vertex(270,467);
vertex(300,497);
vertex(330, 467);
vertex(330,380);
vertex(530,180);
vertex(530,100);
vertex(300,330);
vertex(70,100);

endShape();
//left wing
beginShape();
vertex(95,225);
vertex(95,265);
vertex(215,385);
vertex(215,425);
vertex(260,465);
vertex(260,385);
vertex(95,225);
endShape();
//right wing

beginShape();
vertex(505,225);
vertex(505,265);
vertex(385,385);
vertex(385,425);
vertex(340,465);
vertex(340,385);
vertex(505,225);
endShape();
//head
beginShape();
vertex(300,320);
vertex(265,285);
vertex(300,250);
vertex(335,250);
vertex(338,253);
vertex(338,265);
vertex(330,260);
vertex(320,270);
vertex(335,285);
vertex(300,320);
endShape();

//loop for drawing the stars
for (var i = 0; i < 50; i++) {
    stars[i].draw();
}
//star function call within Draw function

function Star() {
    //picks random star locations
    this.x = random(windowWidth);
    this.y = random(windowHeight-200);
    //sets the framerate
    frameRate(5);
    //defines the stars
    noStroke();
    fill(255, 255, 0);
    ellipse(this.x, this.y, 2, 2);
    //picks a random point to place the stars.
    this.x += (random(10) - 5);
    this.y += (random(10) - 5);
 }   

 //fast stars that overfill everything....
// for (var i = 0; i < 50; i++) {
// var x = random(windowWidth);
// var y = random(windowHeight-200);
// noStroke();
// fill(255, 255, 0);
// ellipse(x, y, 2, 2);
//  }




}
//function to create "winking" stars (random star location every time it loads)

function Star() {
    //picks random star locations
    this.x = random(windowWidth);
    this.y = random(windowHeight-200);
    //sets the framerate
    frameRate(5);
    //defines the stars
    noStroke();
    fill(255, 255, 0);
    ellipse(this.x, this.y, 2, 2);
    //picks a random point to place the stars.
    this.x += (random(10) - 5);
    this.y += (random(10) - 5);
 }