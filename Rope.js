class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:offsetX,y:offsetY},
            stiffness:0.04,
            length:100
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var anchorA = this.rope.bodyA.position;
        var anchorB = this.rope.bodyB.position;
        var bPx = anchorB.x+offsetX;
        var bPy = anchorB.y+offsetY;
        stroke("black");
        strokeWeight(2);
        line(anchorA.x,anchorA.y,bPx,bPy);
    }
}