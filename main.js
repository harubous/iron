class vec1{
    constructor(_x,_y){
        this.x = _x;
        this.y = _y;
    }
    
}
let v2 = new vec1(130,100);
function setup(){
    createCanvas(500,500);
}
function draw(){
    background(255);
    stroke(mouseX,mouseY,255);
    strokeWeight(8);
    line(0,0,mouseX,mouseY);
    line(0,0,v2.x,v2.y);
}
