class Laser {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = 5;
        this.diam = this.r * 2;
        this.toDelete = false;
    }

    show(){
        noStroke();
        fill(255,255,255);
        ellipse(this.x, this.y, 10, 10);
    }

    move(){
        this.y = this.y -20;
    }
    hits(alien){
        //distance 
        var d = dist(this.x, this.y, alien.x, alien.y);
        if (d < this.r + alien.radius){
        return true;
        } else {
            return false;
        }
    }
    remove(){
        this.toDelete =true;
    }
}