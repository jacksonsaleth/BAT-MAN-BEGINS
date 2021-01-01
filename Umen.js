class Umen {
    constructor(x, y,r) {
   var options ={
            restitution:0.4,
            isStatic:true
        }
        this.r=2;
        this.body = Bodies.circle(x, y, this.r,options);       
        this.image=loadImage("walking_1.png");
        World.add(world, this.body);
    }
    
  
    display() {
  
        var pos = this.body.position;
        var angle = this.body.angle;
  
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        console.log("jjjj");
        imageMode(RADIUS);
        image(this.image,pos.x, pos.y, this.r,this.r);
        pop();
    }
  
  };