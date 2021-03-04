class Bar {
    constructor(x,y,width,height){
       var opB= {
            isStatic:true
        }
        this.bar=Bodies.rectangle(x,y,width,height,opB);
        this.width=width;
        this.height=height;
         World.add(world,this.bar);
    }
    display(){
      strokeWeight(2);
      rectMode(CENTER);
      rect(this.bar.position.x,this.bar.position.y,this.width,this.height);
    }
}