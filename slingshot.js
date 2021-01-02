class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length:20
        }
        this.pointB=pointB;
    
        this.polygon = Constraint.create(options)
        World.add(world,this.polygon);
    }

    display(){
        if(this.polygon.bodyA){
        strokeWeight(4);
        line (this.polygon.bodyA.position.x,this.polygon.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
}
    fly(){
        this.polygon.bodyA=null
    }
attach(body){
    this.polygon.bodyA = body;
}
}
