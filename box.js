class Box {
    constructor(x,y){
        var object={
            restitution:1
        }
        this.Visiblity=255;
        this.body=Bodies.rectangle(x,y,30,40,object);
        this.width=30;
        this.height=40;
        World.add(world,this.body);
    }
    display(){
   //     console.log(this.body.speed);
        if(this.body.speed<3){
            var pos=this.body.position;
            push ()
            translate(pos.x,pos.y);
            rotate(this.body.angle);
            fill("red");
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop ()

        }
    
        else{
          World.remove(world,this.body)
          push()
          this.Visiblity=this.Visiblity-10
         // tint(255,this.Visiblity)
         // var pos=this.body.position;
         // rect(pos.x,pos.y,this.width,this.height);
          pop()
        
        }
    }
        score(){
            if(this.Visiblity<0&&this.Visiblity>-255){
              score++
            }
        }
    }