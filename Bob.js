class Bob {
    constructor(x,y){
       var opB= {
            restitution:1,
            friction:0.1,
            density:2,
           // isStatic:true
        }
        this.body=Bodies.circle(x,y,100,opB);
        World.add(world,this.body);
    }
    display(){
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle);
      strokeWeight(2);
      ellipseMode(CENTER);
      fill("pink");
      ellipse(0,0,100,100);
      pop();
    }
}