class Ship{
  
  constructor(){
    this.x = width /2;
    this.y = height - 10;
    this.width = 60;
    this.height = 10;
    this.xdir = 0;
    
  }
  show(){
    fill(0,255,0);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
    rect(this.x+22, this.y -10, 15,20);
    
  }
  
  move(){
    this.x += this.xdir *10;
  }
  
  setDir(dir){
    this.xdir = dir;
  }
}